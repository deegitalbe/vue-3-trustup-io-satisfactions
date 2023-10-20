import VueProvider from "../providers/VueProvider";
import { SatisfactionPluginOptions } from "../types";
import { App } from "vue";

const useSatisfactionPluginProvider = (app: App) => {
  const provider = new VueProvider<SatisfactionPluginOptions>({
    app,
    identifier: "vue-trustup-io-satisfaction",
  });
  return provider;
};

export default useSatisfactionPluginProvider;
