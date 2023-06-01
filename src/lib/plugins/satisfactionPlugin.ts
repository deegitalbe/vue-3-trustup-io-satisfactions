// import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { Plugin } from "vue";
import "vue-final-modal/style.css";
import { modalPlugin } from "@deegital/vue3-trustup-io-vue-final-modal";

const satisfactionPlugin: Plugin = {
  install: (app) => {
    const vfm = createVfm();
    app.use(modalPlugin);
    app.use(vfm);
  },
};

export default satisfactionPlugin;
