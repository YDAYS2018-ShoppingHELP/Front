<template>
  <div class="bg-dark-gray light-gray cf pv2 flex items-center" id="navbar">
  	<span class="pl3">
		<md-icon v-if="dashboardDisplay" style="font-size: 28px!important;">account_circle</md-icon>
		<md-icon v-else style="font-size: 28px!important;">home</md-icon>
	</span>
  	<span class="center"><searchProduct/></span>
  	<span class="center"><panel price=200 /></span>
  	<span class="pointer pr3 hover-custom-blue"><md-icon style="font-size: 36px!important;">view_headline</md-icon></span>
  </div>
</template>

<script>
import searchProduct from "./searchProduct.vue";
import panel from "./Panel.vue";

export default {
  name: "navbar",
  components: {
    searchProduct,
    panel
  },
  data: () => {
    return {
      // TODO: (mostafa) avoid mutation
      dashboardDisplay: false
    };
  }
};
</script>

<style>
</style>
