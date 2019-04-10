<template>
  <div id="navbar">
    <div class="bg-dark-gray light-gray cf pv2 flex items-center">
    	<span class="pl3">
    		<md-icon v-if="dashboardDisplay" style="font-size: 28px!important;">account_circle</md-icon>
        <router-link v-else to="/">
    		  <md-icon style="font-size: 28px!important;">home</md-icon>
        </router-link>
    	</span>
    	<span class="center"><searchProduct/></span>
    	<span class="center">
        <router-link to="/panel">
          <panel />
        </router-link>
      </span>
    	<span class="pointer pr3 hover-custom-blue" @click="showDropdown=!showDropdown">
        <md-icon style="font-size: 36px!important;">view_headline</md-icon>
      </span>
    </div>
    <div v-if="showDropdown" style="margin-top: 1px;" class="white">
      <router-link to="/">
        <span @click="showDropdown=!showDropdown" class="db w-100 pa2 bg-dark-gray pointer" style="margin-top: 1px;">
          <a href="">Acceuil</a>
        </span>
      </router-link>
      <router-link to="/panel">
        <span @click="showDropdown=!showDropdown" class="db w-100 pa2 bg-dark-gray pointer" style="margin-top: 1px;">
          <a href="">Mon panier</a>
        </span>  
      </router-link>
      <router-link to="/supermarkets">
        <span @click="showDropdown=!showDropdown" class="db w-100 pa2 bg-dark-gray pointer" style="margin-top: 1px;">
          <a href="">Super marchets</a>
        </span>  
      </router-link>
      <router-link to="/account">
        <span @click="showDropdown=!showDropdown" class="db w-100 pa2 bg-dark-gray pointer" style="margin-top: 1px;">
          <a href="">Mon compte</a>
        </span>  
      </router-link>
      <router-link to="/dashboard">
        <span @click="showDropdown=!showDropdown" class="db w-100 pa2 bg-dark-gray pointer" style="margin-top: 1px;">
          <a href="">Dashboard</a>
        </span>
      </router-link>      
    </div>
  </div>
</template>

<script>
import searchProduct from "./searchProduct.vue";
import panel from "./Panel.vue";

export default {
  name: "navbar",
  components: {
    searchProduct,
    panel
  },
  data: () => {
    return {
      // TODO: (mostafa) avoid mutation
      dashboardDisplay: false,
      showDropdown: false
    };
  }
};
</script>

<style>
a {
  color: inherit;
  text-decoration: none !important;
}

a:hover {
  color: inherit;
}
</style>
