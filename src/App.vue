<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { mapActions } from "vuex";

export default {
  name: "dashboard",
  components: {
    Navbar
  },

  methods: {
    ...mapActions(["initPanelPrice"])
  },

  created() {
    this.initPanelPrice();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
}

.primary-color {
  color: #e74c3c;
}

.bg-primary-color {
  background-color: #e74c3c;
}

.b--primary-color {
  border-color: #e74c3c;
}

.hover-primary-color:hover {
  color: #e74c3c;
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

.br-50 {
  border-radius: 50%;
}

input {
  outline: none;
  border: 1px solid gray;
}
</style>
