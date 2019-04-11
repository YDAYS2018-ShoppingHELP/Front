<template>
	<div>
    <div v-if="panel.length > 0">
		  <div v-for="product in panelProductsList" class="flex flex-wrap justify-center mt4 mb3">
        <div class=""></div>
        <Product v-for="market in product.markets" :product="panel.find(({ _id }) => _id === product.productId)"
          :market="superMarkets.find(({ _id }) => _id === market.marketId)" :price="market.price" />

      </div>
	  </div>
    <div v-else class="mt5 dark-gray">
      Votre panier est vide!
    </div>
  </div>
</template>

<script>
// import modules
import { mapState, mapActions } from "vuex";

// import components
import Product from "@/components/Product";
import Products from "@/components/Products";

export default {
  name: "panel",
  components: {
    Products,
    Product
  },
  computed: {
    ...mapState(["panel", "panelProductsList", "superMarkets"])
  },
  methods: {
    ...mapActions(["refreshPanelProductsList"])
  },
  created() {
    this.refreshPanelProductsList();
  }
};
</script>
