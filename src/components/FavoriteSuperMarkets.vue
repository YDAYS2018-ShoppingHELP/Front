<template>
  <div class="markets mt5">
  	<h3 class="tc">Vos supermarchés favoris</h3>
  	<FavoriteSuperMarket v-for="favoriteSuperMarket in favoriteSuperMarkets" :favoriteSuperMarket="favoriteSuperMarket" />
  	<!-- If type = show more || create new compoent ? -->
  	<ShowMore />
	  <AddMore route="/superMarkets"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import components
import FavoriteSuperMarket from "@/components/FavoriteSuperMarket";
import AddMore from "@/components/AddMore";
import ShowMore from "@/components/ShowMore";
export default {
  name: "favoritesupermarkets",
  props: {
    markets: Array
  },
  components: {
    FavoriteSuperMarket,
    AddMore,
    ShowMore
  },
  computed: {
    ...mapState(["favoriteSuperMarkets"])
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
