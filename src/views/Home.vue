<template>
  <div class="home">
  	<Products :products="filteredProducts"/>
  </div>
</template>

<script>
// Add to template  <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
// @ is an alias to /src
import { mapState } from "vuex";
// components
import Products from "@/components/Products.vue";
import Navbar from "@/components/Navbar.vue";

// TODO : (mostafa) import only usefull icons
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

export default {
  name: "home",
  components: {
    Products,
    Navbar
  },
  data: () => {
    return {
      query: ""
    };
  },
  computed: {
    ...mapState(["filteredProducts"])
  }
};
</script>
