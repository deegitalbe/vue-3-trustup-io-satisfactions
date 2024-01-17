// import { createApp, App } from 'vue';
import { Plugin } from "vue";
import { useTranslation } from "@deegital/vue-3-trustup-io-translations";
import { SatisfactionPluginOptions } from "../types";
import useSatisfactionPluginProvider from "../composables/useSatisfactionPluginProvider";

const satisfactionPlugin: Plugin<SatisfactionPluginOptions> = {
  install: (app, options) => {
    const { addTranslationsByKey } = useTranslation();
    addTranslationsByKey("trustup-io-satisfaction-plugin");
    const provider = useSatisfactionPluginProvider(app);
    provider.set(options);
  },
};

export default satisfactionPlugin;
