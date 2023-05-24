// import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";
import { Plugin } from "vue";
import "vue-final-modal/style.css";

const satisfactionPlugin: Plugin = {
  install: (app, options: { appName: string }) => {
    const vfm = createVfm();
    app.use(translationPlugin, options);
    app.use(vfm);
  },
};

export default satisfactionPlugin;
