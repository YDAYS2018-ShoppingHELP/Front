<template>
  <div class="dashboard">
  	<FavoriteSuperMarkets :markets="[]" />
  	<FavoriteProducts :products="[]" />
  </div>
</template>

<script>
// Import components
import FavoriteProducts from "@/components/FavoriteProducts";
import FavoriteSuperMarkets from "@/components/FavoriteSuperMarkets";
// TODO : (mostafa) import only usefull icons
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

export default {
  name: "dashboard",
  components: {
    FavoriteProducts,
    FavoriteSuperMarkets
  }
};
</script>
