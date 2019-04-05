<template>
  <div class="product bb b--primary-color ma2 pv2 w-30 flex relative">
    <span class="pointer" @click="toggleFacoriteProduct(product)">
      <md-icon v-if="product.isFavorite" class="primary-color" style="position: absolute; top: 5px; right: 5px;">star</md-icon>
      <md-icon v-else class="gray" style="position: absolute; top: 5px; right: 5px;">star</md-icon>
    </span>
    <div class="bg-light-gray w-50"></div>
  	<div class="w-60 ph3 tl">
	    <div class="fw7 primary-color">{{product.name}}</div>
	    <span class="dib">{{product.description}}</span>
	  </div>

    <div v-if="product.existsInPanel" class="absolute bottom-0 right-0 w-20 mb2 white tc br4 pointer">
      <span class="dib w1 ph1 bg-primary-color ba b--primary-color addon-left" @click="reduceProductQty(product)">-</span>
      <span class="dib ph3 ba b--light-gray black">{{product.qty}}</span>
      <span class="dib w1 ph1 bg-primary-color ba b--primary-color addon-right" @click="increaseProductQty(product)">+</span>
    </div>
	  <div v-else class="absolute bottom-0 right-0 w-20 pv1 mb2 bg-primary-color white tc br4 pointer" @click="addProductToPanel(product);">
  		<md-icon class="notransition" style="font-size: 16px!important;">add_shopping_cart</md-icon>
  		{{product.price}} €
  	</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  props: {
    product: Object
  },

  methods: {
    ...mapActions([
      "addProductToPanel",
      "reduceProductQty",
      "increaseProductQty",
      "toggleFacoriteProduct"
    ])
  }
};
</script>

<style>
.product {
  height: 150px;
}

.addon-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.addon-right {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
