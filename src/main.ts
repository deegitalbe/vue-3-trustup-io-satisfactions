import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createVfm } from "vue-final-modal";
import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";
import { translationPlugin } from "@deegital/vue-3-trustup-io-translations";

const app = createApp(App);
const vfm = createVfm();
app.use(translationPlugin, { appName: "worksite-admin" });
app.use(satisfactionPlugin);
app.use(vfm);
app.mount("#app");
