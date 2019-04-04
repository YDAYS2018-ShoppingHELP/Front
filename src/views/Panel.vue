<template>
	<div>
    <div v-if="panel.length > 0">
		  <Products :products="panel"/>
	  </div>
    <div v-else class="mt5 dark-gray">
      Votre panier est vide!
    </div>
  </div>
</template>

<script>
// import modules
import { mapState } from "vuex";

// import components
import Products from "@/components/Products";

export default {
  name: "panel",
  components: {
    Products
  },
  computed: {
    ...mapState(["panel"])
  }
};
</script>
