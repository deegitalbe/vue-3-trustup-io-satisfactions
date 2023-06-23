import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
// import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";
// import { translationPlugin } from "@deegital/vue-3-trustup-io-translations";
import { modalPlugin } from "@henrotaymcorp/vue-modal";

const app = createApp(App);
app
  .use(modalPlugin)
  // .use(translationPlugin, { appName: "worksite-admin" })
  // .use(satisfactionPlugin)
  .mount("#app");
