import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    superMarkets: [
      { _id: 1, name: "Carrefour", isFavorite: true },
      { _id: 2, name: "LIDL", isFavorite: false },
      { _id: 3, name: "Auchan", isFavorite: false },
      { _id: 4, name: "Carrefour", isFavorite: false }
    ],
    favoriteSuperMarkets: [{ _id: 1, name: "Carrefour", isFavorite: true }],
    products: [
      {
        _id: 1,
        name: "Oeufs",
        description: "Le Goût Primeur Nature 17,5% MG",
        price: 13,
        existsInPanel: false,
        isFavorite: true,
        qty: 0
      },
      {
        _id: 2,
        name: "Lait",
        description: "Le Goût Primeur Nature 17,5% MG.",
        price: 13,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 3,
        name: "Lait",
        description: "Le Goût Primeur Nature 17,5% MG",
        price: 13,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      }
    ],
    favoriteProducts: [
      {
        _id: 1,
        name: "Oeufs",
        description: "Le Goût Primeur Nature 17,5% MG",
        price: 13,
        existsInPanel: false,
        isFavorite: true,
        qty: 0
      }
    ],
    filteredProducts: [],
    panel: [],
    panelPrice: 0
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
        product.qty += 1;
        state.panel.push(product);
        state.panelPrice += product.price;
      }
    },

    removeProductFromPanel(state, product) {
      product.existsInPanel = false;
      product.qty = 0;
      state.panel = state.panel.filter(({ _id }) => _id !== product._id);
      state.panelPrice -= product.price;
    },

    reduceProductQty(state, product) {
      if (product.qty === 1) {
        this.commit("removeProductFromPanel", product);
        return;
      }
      let foundedProduct = state.panel.find(({ _id }) => _id === product._id);
      if (foundedProduct && product.qty > 0) {
        foundedProduct.qty -= 1;
        state.panelPrice -= foundedProduct.price;
      }
    },

    increaseProductQty(state, product) {
      let foundedProduct = state.panel.find(({ _id }) => _id === product._id);
      if (foundedProduct) {
        foundedProduct.qty += 1;
        state.panelPrice += foundedProduct.price;
      }
    },

    addFavoriteProduct(state, product) {
      product.isFavorite = true;
      state.favoriteProducts.push(product);
    },

    removeFavoriteProduct(state, product) {
      let productId = product._id;
      state.products.find(({ _id }) => _id === productId).isFavorite = false;
      state.favoriteProducts = state.favoriteProducts.filter(
        ({ _id }) => _id !== productId
      );
    },

    toggleFavoriteProduct(_, product) {
      if (!product.isFavorite) {
        return this.commit("addFavoriteProduct", product);
      }
      return this.commit("removeFavoriteProduct", product);
    },

    addFavoriteSuperMarket(state, superMarket) {
      superMarket.isFavorite = true;
      state.favoriteSuperMarkets.push(superMarket);
    },

    removeFavoriteSuperMarket(state, superMarket) {
      let superMarketId = superMarket._id;
      state.superMarkets.find(
        ({ _id }) => _id === superMarketId
      ).isFavorite = false;
      state.favoriteSuperMarkets = state.favoriteSuperMarkets.filter(
        ({ _id }) => superMarketId !== _id
      );
    },

    toggleFavoriteSuperMarket(state, superMarket) {
      if (!superMarket.isFavorite) {
        return this.commit("addFavoriteSuperMarket", superMarket);
      }
      return this.commit("removeFavoriteSuperMarket", superMarket);
    },

    initPanelPrice(state) {
      state.panelPrice = state.panel.reduce(
        (acc, product) => (acc += product.price),
        0
      );
    }
  },
  actions: {
    initPanelPrice({ commit }) {
      commit("initPanelPrice");
    },

    addProductToPanel({ commit }, product) {
      commit("addProductToPanel", product);
    },

    reduceProductQty({ commit }, product) {
      commit("reduceProductQty", product);
    },

    increaseProductQty({ commit }, product) {
      commit("increaseProductQty", product);
    },

    toggleFavoriteProduct({ commit }, product) {
      commit("toggleFavoriteProduct", product);
    },

    removeFavoriteProduct({ commit }, product) {
      commit("removeFavoriteProduct", product);
    },

    toggleFavoriteSuperMarket({ commit }, superMarket) {
      commit("toggleFavoriteSuperMarket", superMarket);
    },

    removeFavoriteSuperMarket({ commit }, superMarket) {
      commit("removeFavoriteSuperMarket", superMarket);
    }
  }
});
