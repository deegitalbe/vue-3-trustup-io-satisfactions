// import { createApp } from "vue";
import { Plugin } from "vue";
import "vue-final-modal/style.css";
import { useTranslation } from "@deegital/vue-3-trustup-io-translations";

const satisfactionPlugin: Plugin = {
  install: () => {
    useTranslation().addTranslationsByKey("worksite-admin");
  },
};

export default satisfactionPlugin;
