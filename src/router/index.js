import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/map",
    name: "Map",
    component: () => import(/* webpackChunkName: "about" */ "../views/Map.vue")
  },
  {
    path: "/date",
    name: "Map",
    component: () =>
      import(/* webpackChunkName: "date" */ "../views/Calendar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
