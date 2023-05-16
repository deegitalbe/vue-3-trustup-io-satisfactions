import { createApp } from "vue";
import App from "./App.vue";
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";
import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";

// import "./main.css";

const app = createApp(App);
const vfm = createVfm();
app.use(translationPlugin, { appName: import.meta.env.VITE_APP_NAME });
app.use(vfm).mount("#app");
