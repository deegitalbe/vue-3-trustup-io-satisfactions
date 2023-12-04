import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";
import { translationPlugin } from "@deegital/vue-3-trustup-io-translations";
import { modalPlugin } from "@henrotaymcorp/vue-modal";

const app = createApp(App);
app
  .use(modalPlugin)
  // TODO ADD KEY FOR PACKAGE TRANSLATION
  .use(translationPlugin, { appName: "worksite-admin" })
  .use(satisfactionPlugin, {
    url: "https://trustup-io-satisfaction.docker.localhost",
  })
  .mount("#app");

export default app;
