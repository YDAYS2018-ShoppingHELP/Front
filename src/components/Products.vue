<template>
  <div class="flex flex-wrap justify-center mt5">
    <Product v-for="product in products" :product="product"/>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "products",
  components: {
    Product
  },
  props: {
    products: Array
  }
};
</script>
