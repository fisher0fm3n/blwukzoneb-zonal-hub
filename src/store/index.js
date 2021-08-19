import { createStore } from "vuex";

export default createStore({
  state: {
    itemModal: null,
  },
  mutations: {
    TOGGLE_ITEM(state) {
      state.itemModal = !state.itemModal;
      console.log(state.itemModal);
    },
  },
  actions: {},
  modules: {},
});
