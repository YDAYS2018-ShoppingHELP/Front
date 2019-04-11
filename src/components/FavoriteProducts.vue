<template>
  <div class="markets mt4">
  	<h3 class="tc">Vos produits favoris</h3>
  	<FavoriteProduct v-for="favoriteProduct in shownProducts" :favoriteProduct="favoriteProduct" />
  	<!-- If type = show more || create new component ? -->
  	<ShowMore v-if="favoriteProducts.length > 4" />
    <AddMore route="/" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// Import components
import FavoriteProduct from "@/components/FavoriteProduct";
import ShowMore from "@/components/ShowMore";
import AddMore from "@/components/AddMore";
export default {
  name: "favoriteProducts",
  props: {
    markets: Array
  },
  components: {
    FavoriteProduct,
    ShowMore,
    AddMore
  },
  computed: {
    ...mapState(["favoriteProducts"]),
    shownProducts() {
      return this.favoriteProducts.filter((el, index) => index < 4);
    }
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
