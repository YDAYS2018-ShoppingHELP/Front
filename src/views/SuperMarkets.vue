<template>
  <div class="super-markets mt5">
  	<h3 class="tc">Les supermarchés</h3>
  	<SuperMarket />
  	<SuperMarket />
  	<SuperMarket />
  	<SuperMarket />
  	<!-- If type = show more || create new compoent ? -->
  	<ShowMore />
	<AddMore />
  </div>
</template>

<script>
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
  }
};
</script>

<style>
.show-more:hover {
  opacity: 1;
}
</style>
