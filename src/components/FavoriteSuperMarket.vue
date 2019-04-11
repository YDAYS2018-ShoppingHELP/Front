<template>
  <div class="dib super-market relative pa5 ma2 pointer" @click="removeFavoriteSuperMarket(favoriteSuperMarket)">
  	<div class="default bg-light-gray absolute left-0 top-0 w-100 h-100 z-1"></div>

    <div class="flex items-center justify-center bg-dark-gray light-gray o-80 absolute left-0 top-0 w-100 h-100 z-0">
      <md-icon class="notransition primary-color" style="font-size: 28px!important;">delete</md-icon>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "favoriteSuperMarket",
  props: {
    favoriteSuperMarket: Object
  },
  methods: {
    ...mapActions(["removeFavoriteSuperMarket"])
  }
};
</script>

<style lang="scss">
.super-market:hover {
  .default {
    display: none;
  }
}
</style>
