import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App)
  .provide("today", new Date().toISOString().split("T")[0])
  .use(store)
  .use(router)
  .mount("#app");
