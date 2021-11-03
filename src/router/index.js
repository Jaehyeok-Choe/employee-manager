import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/new",
    name: "New-employee",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewEmployee.vue"),
  },
  {
    path: "/edit/:employee_id",
    name: "Edit-employee",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditEmployee.vue"),
  },
  {
    path: "/:employee_id",
    name: "View-employee",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewEmployee.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
