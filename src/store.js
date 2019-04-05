import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        _id: 1,
        name: "Oeufs",
        description: "Le Goût Primeur Nature 17,5% MG",
        price: 13,
        existsInPanel: false,
        qty: 0
      },
      {
        _id: 2,
        name: "Lait",
        description: "Le Goût Primeur Nature 17,5% MG.",
        price: 13,
        existsInPanel: false,
        qty: 0
      },
      {
        _id: 3,
        name: "Lait",
        description: "Le Goût Primeur Nature 17,5% MG",
        price: 13,
        existsInPanel: false,
        qty: 0
      }
    ],
    filteredProducts: [],
    panel: []
  },
  mutations: {
    filterProducts(state, query) {
      state.filteredProducts = state.products.filter(product =>
        product.name.concat(product.description).includes(query)
      );
    },

    addProductToPanel(state, product) {
      if (!state.panel.find(({ _id }) => _id === product._id)) {
        product.existsInPanel = true;
        product.qty = 1;
        state.panel.push(product);
      }
    },

    removeProductFromPanel(state, product) {
      state.panel = state.panel.filter(({ _id }) => _id !== product._id);
    },

    reduceProductQty(state, product) {
      if (product.qty === 1) {
        this.commit("removeProductFromPanel", product);
        return;
      }
      let foundedProduct = state.panel.find(({ _id }) => _id === product._id);
      if (foundedProduct && product.qty > 0) {
        foundedProduct.qty -= 1;
      }
    },

    increaseProductQty(state, product) {
      let foundedProduct = state.panel.find(({ _id }) => _id === product._id);
      if (foundedProduct) {
        foundedProduct.qty += 1;
      }
    }
  },
  actions: {
    addProductToPanel({ commit }, product) {
      commit("addProductToPanel", product);
    },

    reduceProductQty({ commit }, product) {
      commit("reduceProductQty", product);
    },

    increaseProductQty({ commit }, product) {
      commit("increaseProductQty", product);
    }
  }
});
