import { createStore } from "vuex";
import db from "../firebase/firebaseinit";

export default createStore({
  state: {
    itemData: [],
    itemModal: null,
    modalActive: null,
    itemsLoaded: null,
    currentItemArray: null,
    editItem: null,
  },
  mutations: {
    TOGGLE_ITEM(state) {
      state.itemModal = !state.itemModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_ITEM_DATA(state, payload) {
      state.itemData.push(payload);
    },
    ITEMS_LOADED(state) {
      state.itemsLoaded = true;
    },
    SET_CURRENT_ITEM(state, payload) {
      state.currentItemArray = state.itemData.filter((item) => {
        return item.itemID === payload;
      });
    },
    TOGGLE_EDIT_ITEM(state) {
      state.editItem = !state.editItem;
    },
  },
  actions: {
    async GET_ITEMS({ commit, state }) {
      const getData = db.collection("items");
      const results = await getData.get();
      results.forEach((doc) => {
        if (!state.itemData.some((item) => item.docID === doc.id)) {
          const data = {
            docID: doc.id,
            itemID: doc.data().itemID,
            itemName: doc.data().itemName,
            itemBarcode: doc.data().itemBarcode,
            itemCategory: doc.data().itemCategory,
            itemCondition: doc.data().itemCondition,
            itemDescription: doc.data().itemDescription,
            itemDate: doc.data().itemDate,
            itemTime: doc.data().itemTime,
            itemImages: doc.data().itemImages,
            ownerName: doc.data().ownerName,
            adminID: doc.data().adminID,
          };
          commit("SET_ITEM_DATA", data);
        }
      });
      commit("ITEMS_LOADED");
    },
  },
  modules: {},
});
