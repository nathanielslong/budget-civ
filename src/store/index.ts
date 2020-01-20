import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [] as string[]
  },
  mutations: {
    addCategory: (state, newCategory): void => {
      state.categories.push(newCategory);
    }
  },
  actions: {
  },
  modules: {
  }
});
