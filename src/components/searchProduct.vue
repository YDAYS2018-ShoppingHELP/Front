<template>
  <span v-click-outside="switchToDefaultMode" v-on:click="switchToInputMode" 
        class="ba br4 b--light-gray ph3 pointer flex items-center b--custom-blue hover-custom-blue" id="search-product">
    <input v-if="inputMode" type="text" v-model="query" class="bn bg-transparent light-gray outline-0" placeholder="Nom du produit">
    <span class="pr2" v-else-if="query">{{query}}</span>
    <md-icon @click.native="filterProducts(query)" class="notransition" style="font-size: 18px!important;">search</md-icon>
  </span>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapMutations } from "vuex";

export default {
  name: "searchProduct",
  data() {
    return {
      query: "",
      inputMode: false
    };
  },
  methods: {
    switchToInputMode() {
      this.inputMode = true;
    },
    switchToDefaultMode() {
      this.inputMode = false;
      this.filterProducts(this.query);
    },
    ...mapMutations(["filterProducts"])
  },
  directives: {
    ClickOutside
  }
};
</script>

<style>
</style>
