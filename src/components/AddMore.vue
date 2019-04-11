<template>
  <router-link :to="`${route}`">
	  <div class="dib relative pa5 ma2 pointer">
		<div class="show-more flex items-center justify-center bg-primary-color o-80 light-gray absolute left-0 top-0 w-100 h-100 z-0">
	    	<md-icon class="notransition" style="font-size: 36px!important;">add</md-icon>
		</div>
	  </div>
  </router-link>
</template>

<script>
export default {
  name: "add-more",
  props: {
    route: String
  }
};
</script>
