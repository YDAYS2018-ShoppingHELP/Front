<template>
  <div class="bg-dark-gray light-gray cf pv2 flex items-center" id="navbar">
  	<span class="pl3">
  		<md-icon v-if="dashboardDisplay" style="font-size: 28px!important;">account_circle</md-icon>
      <router-link v-else to="/">
  		  <md-icon style="font-size: 28px!important;">home</md-icon>
      </router-link>
  	</span>
  	<span class="center"><searchProduct/></span>
  	<span class="center"><panel price=200 /></span>
  	<span class="pointer pr3 hover-custom-blue">
      <router-link to="/dashboard">
        <md-icon style="font-size: 36px!important;">view_headline</md-icon>
      </router-link>
    </span>
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
a {
  color: black;
}

a:hover {
  color: black;
}
</style>
