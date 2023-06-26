// import { createApp } from "vue";
import { Plugin } from "vue";
import { useTranslation } from "@deegital/vue-3-trustup-io-translations";

const satisfactionPlugin: Plugin = {
  install: () => {
    const { addTranslationsByKey } = useTranslation();
    addTranslationsByKey("worksite-admin");
  },
};

export default satisfactionPlugin;
