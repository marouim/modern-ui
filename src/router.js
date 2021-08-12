import Vue from "vue";
import VueRouter from "vue-router";

// Import router components
import Integrations from "./components/Integrations.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "integrations",
    path: "/",
    component: Integrations,
    meta: {
      requiresAuth: true,
      displayName: "Integrations"
    },
  },
 
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
