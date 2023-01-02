import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "../views/ContactView.vue";
import Login from "../views/LoginView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
