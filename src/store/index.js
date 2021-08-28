import { createStore } from "vuex";
import db from "../firebase/firebaseinit";

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    itemData: [],
    itemModal: null,
    modalActive: null,
    itemsLoaded: null,
    currentItemArray: null,
    itemBasket: [],
    editItem: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
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
    DELETE_ITEM(state, payload) {
      state.itemData = state.itemData.filter((item) => item.docID !== payload);
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
    async UPDATE_ITEM({ commit, dispatch }, { docID, routeID }) {
      commit("DELETE_ITEM", docID);
      await dispatch("GET_ITEMS");
      commit("TOGGLE_ITEM");
      commit("TOGGLE_EDIT_ITEM");
      commit("SET_CURRENT_ITEM", routeID);
    },

    async DELETE_ITEM({ commit }, docID) {
      const getItem = db.collection("items").doc(docID);
      await getItem.delete();
      commit("DELETE_ITEM", docID);
    },
  },
  modules: {},
});
