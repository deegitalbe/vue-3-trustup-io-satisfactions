import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createVfm } from "vue-final-modal";
import satisfactionPlugin from "./lib/plugins/satisfactionPlugin";

const app = createApp(App);
app.use(satisfactionPlugin, createVfm);
app.mount("#app");
