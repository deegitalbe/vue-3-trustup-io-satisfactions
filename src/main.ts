import { createApp } from "vue";
import App from "./App.vue";
import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";
import { modalPlugin } from "@deegital/vue3-trustup-io-vue-final-modal";
import ratePlugin from "vue-rate";
import "vue-rate/dist/vue-rate.css";
import "./main.css";
import "@deegital/vue3-trustup-io-vue-final-modal/dist/style.css";

const app = createApp(App);
app.use(modalPlugin);
app.use(ratePlugin);
app.use(translationPlugin, { appName: "worksite-admin" });
app.mount("#app");
