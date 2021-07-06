import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Users/Signup.vue";
import Login from "../views/Users/Login.vue";
import Logout from "../views/Users/Logout.vue";
import UsersShow from "../views/Users/Show.vue";
import MoviesIndex from "../views/Movies/Index.vue";
import MoviesShow from "../views/Movies/Show.vue";
import FavoritesIndex from "../views/Favorites/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/users/show",
    name: "UsersShow",
    component: UsersShow,
  },
  {
    path: "/movies/index",
    name: "MoviesIndex",
    component: MoviesIndex,
  },
  {
    path: "/movies/show",
    name: "MoviesShow",
    component: MoviesShow,
  },
  {
    path: "/favorites/index",
    name: "FavoritesIndex",
    component: FavoritesIndex,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
