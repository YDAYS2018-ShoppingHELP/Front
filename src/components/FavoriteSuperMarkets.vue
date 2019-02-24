<template>
  <div class="markets mt5">
  	<h3 class="tc">Vos supermarchés favoris</h3>
  	<FavoriteSuperMarket />
  	<FavoriteSuperMarket />
  	<FavoriteSuperMarket />
  	<FavoriteSuperMarket />
  	<!-- If type = show more || create new compoent ? -->
  	<ShowMore />
	  <AddMore />
  </div>
</template>

<script>
import FavoriteSuperMarket from "@/components/FavoriteSuperMarket";
import AddMore from "@/components/AddMore";
import ShowMore from "@/components/ShowMore";
export default {
  name: "favoriteSuperMarket",
  props: {
    markets: Array
  },
  components: {
    FavoriteSuperMarket,
    AddMore,
    ShowMore
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
