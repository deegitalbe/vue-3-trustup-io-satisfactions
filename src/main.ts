import { createApp } from "vue";
import App from "./App.vue";
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";

// import "./main.css";

const app = createApp(App);
const vfm = createVfm();
app.use(vfm).mount("#app");
