<template>
  <div class="product bb b--primary-color ma2 pv2 w-30 flex relative">
  	<div class="bg-light-gray w-50"></div>
  	<div class="w-60 ph3 tl">
	    <div class="fw7 primary-color">{{product.name}}</div>
	    <span class="dib">{{product.description}}</span>
	</div>
	<div class="absolute bottom-0 right-0 w-20 pv1 mb2 bg-primary-color white tc br4">
		<md-icon class="notransition" style="font-size: 16px!important;">add_shopping_cart</md-icon>
		13 €
	</div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object
  }
};
</script>

<style>
.product {
  height: 150px;
}
</style>