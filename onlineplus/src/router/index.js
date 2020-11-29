import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/vindere",
    name: "Vindere",
    component: () =>
      import("../views/Vindere.vue")
  },
  {
    path: "/votes",
    name: "Votes",
    component: () =>
      import("../views/Votes.vue")
  },
  {
    path: "/board",
    name: "Board",
    component: () =>
      import("../views/Board.vue"),
        // children: [
        //   {
        //     path: "/id",
        //     component: Singleboard
        //   }
        // ],
  }
];

const router = new VueRouter({
  routes
});

export default router;
