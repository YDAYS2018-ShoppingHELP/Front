<template>
	<div class="ba br4 b--light-gray ph2 pointer flex items-center b--custom-blue hover-custom-blue" id="panel">
		<md-icon class="notransition" style="font-size: 16px!important;">add_shopping_cart</md-icon>
		<span class="pl">{{price}} €</span>
	</div>
</template>

<script>
export default {
  name: "panel",
  props: {
    price: String
  }
};
</script>
