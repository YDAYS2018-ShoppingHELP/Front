import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import Panel from "./views/Panel.vue";
import SuperMarkets from "./views/SuperMarkets.vue";
import PersonalInfos from "./views/PersonalInfos";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/panel",
      name: "panel",
      component: Panel
    },
    {
      path: "/supermarkets",
      name: "SuperMarkets",
      component: SuperMarkets
    },
    {
      path: "/personalinfos",
      name: "PersonalInfos",
      component: PersonalInfos
    }
  ]
});
