import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Budget from "../views/Budget.vue";
import NewBudget from "../views/NewBudget.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/budget",
    name: "budget",
    component: Budget
  },
  {
    path: "/budget/new",
    name: "newbudget",
    component: NewBudget
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
