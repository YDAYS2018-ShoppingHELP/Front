<template>
  <div class="super-markets mt5">
  	<h3 class="tc">Les supermarchés</h3>
  	<SuperMarket v-for="superMarket in superMarkets" :superMarket="superMarket" />
  	<!-- If type = show more || create new compoent ? -->
  </div>
</template>

<script>
import { mapState } from "vuex";

// Import components
import SuperMarket from "@/components/SuperMarket";
import AddMore from "@/components/AddMore";
import ShowMore from "@/components/ShowMore";
export default {
  name: "supermarket",
  props: {
    markets: Array
  },
  components: {
    SuperMarket,
    AddMore,
    ShowMore
  },
  computed: {
    ...mapState(["superMarkets"])
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
