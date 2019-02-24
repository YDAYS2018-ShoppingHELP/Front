<template>
  <div class="markets mt4">
  	<h3 class="tc">Vos produits favoris</h3>
  	<FavoriteProduct />
  	<FavoriteProduct />
  	<FavoriteProduct />
  	<FavoriteProduct />
  	<!-- If type = show more || create new component ? -->
  	<ShowMore />
    <AddMore />
  </div>
</template>

<script>
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
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
