import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    superMarkets: [
      { _id: 1, name: "Carrefour", isFavorite: true },
      { _id: 2, name: "LIDL", isFavorite: false },
      { _id: 3, name: "Auchan", isFavorite: false },
      { _id: 4, name: "Carrefour", isFavorite: false },
      { _id: 5, name: "Carrefour", isFavorite: false },
      { _id: 6, name: "Carrefour", isFavorite: false }
    ],
    favoriteSuperMarkets: [{ _id: 1, name: "Carrefour", isFavorite: true }],
    products: [
      {
        _id: 1,
        name: "Oeufs frais calibre moyen",
        description: "Oeufs frais calibre moyen. Les 30 oeufs.",
        price: 2.9,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 2,
        name: "Lait",
        description: "Le Goût Primeur Nature 17,5% MG.",
        price: 1.5,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 3,
        name: "Crème liquide semi-épaisse",
        description: "Crème liquide semi-épaisse 18% MG ELLE & VIRE",
        price: 2.5,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 4,
        name: "P'tit Basque brebis",
        description: "La part de 320 g. 16.91 €/kg",
        price: 5.4,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 5,
        name: "Beure doux",
        description: "La plaquette de 250g. 7.16 €/kg",
        price: 2.2,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      },
      {
        _id: 6,
        name: "Poulet fermier d'Auvergne",
        description: "Poulet fermier",
        price: 1.7,
        existsInPanel: false,
        isFavorite: false,
        qty: 0
      }
    ],
    favoriteProducts: [],
    filteredProducts: [],
    panel: [],
    panelProductsListBase: [
      {
        productId: 1,
        markets: [{ marketId: 1, price: 2.7 }, { marketId: 2, price: 2.8 }]
      },
      {
        productId: 2,
        markets: [{ marketId: 1, price: 1.5 }, { marketId: 2, price: 1.6 }]
      },
      {
        productId: 3,
        markets: [{ marketId: 1, price: 2.5 }, { marketId: 2, price: 2.4 }]
      },
      {
        productId: 4,
        markets: [{ marketId: 1, price: 5.4 }, { marketId: 2, price: 5.6 }]
      },
      {
        productId: 5,
        markets: [{ marketId: 1, price: 2.2 }, { marketId: 2, price: 2.0 }]
      },
      {
        productId: 6,
        markets: [{ marketId: 1, price: 1.7 }, { marketId: 2, price: 1.9 }]
      }
    ],
    panelProductsList: [],
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
    },

    refreshPanelProductsList({
      panel,
      panelProductsList,
      panelProductsListBase
    }) {
      while (panelProductsList.length) {
        panelProductsList.pop();
      }

      panel.forEach(el => {
        let productInfos = panelProductsListBase.find(
          ({ productId }) => productId === el._id
        );
        if (productInfos) {
          panelProductsList.push(productInfos);
        }
      });
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
    },

    refreshPanelProductsList({ commit }) {
      commit("refreshPanelProductsList");
    }
  }
});
