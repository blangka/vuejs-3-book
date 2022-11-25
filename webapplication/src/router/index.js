import { createRouter, createWebHistory } from "vue-router";
import ProfileView from "@/views/ProfileView.vue";
import NotFoundView from "@/views/NotFoundView";

const routes = [
  {
    path: "/",
    redirect: "/profile",
  },
  { path: "/profile", name: "profile", component: ProfileView, alias: "/home" },
  {
    path: "/:catchAll(.*)+",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
