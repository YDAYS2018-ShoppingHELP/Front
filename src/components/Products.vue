<template>
  <div class="products">
    <div v-for="product in products">
      {{product.name}} - {{product.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props: {
    products: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
