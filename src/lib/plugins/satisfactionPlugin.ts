// import { createApp } from "vue";
import { Plugin } from "vue";
import "vue-final-modal/style.css";
import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";

const satisfactionPlugin: Plugin = {
  install: (app, createVfm) => {
    const vfm = createVfm();
    app.use(translationPlugin, { appName: "worksite-admin" });
    app.use(vfm);
  },
};

export default satisfactionPlugin;
