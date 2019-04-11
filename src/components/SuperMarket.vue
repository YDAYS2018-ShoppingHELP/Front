<template>
  <div class="dib super-market relative pa5 ma2 pointer" @click="toggleFavoriteSuperMarket(superMarket)">
  	<div class="default bg-light-gray absolute left-0 top-0 w-100 h-100 z-1"></div>

    <div class="flex items-center justify-center bg-dark-gray light-gray o-80 absolute left-0 top-0 w-100 h-100 z-0">
      <md-icon v-if="superMarket && superMarket.isFavorite" class="notransition primary-color" style="font-size: 28px!important;">star</md-icon>
      <md-icon v-else class="notransition hover-primary-color" style="font-size: 28px!important;">star</md-icon>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "supermarket",
  props: {
    superMarket: Object
  },
  methods: {
    ...mapActions(["toggleFavoriteSuperMarket"])
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
