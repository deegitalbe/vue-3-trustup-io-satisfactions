import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";
import { translationPlugin } from "@deegital/vue-3-trustup-io-translations";

const app = createApp(App);
app.use(translationPlugin, { appName: "worksite-admin" });
app.use(satisfactionPlugin);
app.mount("#app");
