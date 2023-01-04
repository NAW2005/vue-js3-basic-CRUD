import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Addproject from "../views/Addproject.vue";
import Edit from "../views/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/addproject/your",
      name: "Addproject",
      component: Addproject,
    },
    {
      path: "/editproject/:id",
      name: "Editproject",
      component: Edit,
      props: true
    },
  ],
});

export default router;
