import { createApp } from "vue";
import App from "./App.vue";
import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";
import "./main.css";
import { satisfactionPlugin } from "./lib";

const app = createApp(App);
app.use(satisfactionPlugin);
app.use(translationPlugin, { appName: "worksite-admin" });
app.mount("#app");
