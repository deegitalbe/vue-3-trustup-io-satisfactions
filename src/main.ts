import { createApp } from "vue";
import App from "./App.vue";
import satisfactionPlugin from "./lib/plugins/SatisfactionPlugin";

const app = createApp(App);
app.use(satisfactionPlugin, { appName: "worksite-admin" }).mount("#app");
