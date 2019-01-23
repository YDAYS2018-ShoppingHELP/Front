import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: "Oeufs", description: "Le Goût Primeur Nature 17,5% MG" },
      { id: 2, name: "Lait", description: "Le Goût Primeur Nature 17,5% MG." },
      { id: 3, name: "Lait", description: "Le Goût Primeur Nature 17,5% MG" },
      { id: 4, name: "Lait", description: "Le Goût Primeur Nature 17,5% MG" }
    ],
    filteredProducts: []
  },
  mutations: {
    filterProducts(state, query) {
      state.filteredProducts = state.products.filter(product =>
        product.name.concat(product.description).includes(query)
      );
    }
  },
  actions: {}
});
