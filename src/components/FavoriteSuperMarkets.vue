<template>
  <div class="markets mt5">
  	<h3 class="tc">Vos supermarchés favoris</h3>
  	<FavoriteSuperMarket v-for="superMarket in shownSuperMarkets" :favoriteSuperMarket="superMarket" />
  	<!-- If type = show more || create new compoent ? -->
  	<ShowMore v-if="favoriteSuperMarkets.length > 4" />
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
    ...mapState(["favoriteSuperMarkets"]),
    shownSuperMarkets() {
      return this.favoriteSuperMarkets.filter((el, index) => index < 4);
    }
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
