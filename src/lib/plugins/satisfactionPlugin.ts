// import { createApp } from "vue";
import { Plugin } from "vue";
import "vue-final-modal/style.css";
import { modalPlugin } from "@deegital/vue3-trustup-io-vue-final-modal";

const satisfactionPlugin: Plugin = {
  install: (app) => {
    app.use(modalPlugin);
  },
};

export default satisfactionPlugin;
