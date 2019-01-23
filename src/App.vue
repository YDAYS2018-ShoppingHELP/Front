<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "dashboard",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}

.primary-color {
  color: #e74c3c;
}

.bg-primary-color {
  background-color: #e74c3c;
}

.border-primary-color {
  border-color: #e74c3c;
}

.b--custom-blue:hover {
  border-color: #03a9f4;
}

.hover-custom-blue:hover {
  color: #03a9f4;
}

.notransition {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}
</style>
