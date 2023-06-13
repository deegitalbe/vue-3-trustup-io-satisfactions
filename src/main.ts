import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createVfm } from "vue-final-modal";
import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";

const app = createApp(App);
const vfm = createVfm();
app.use(satisfactionPlugin, vfm);
app.mount("#app");
