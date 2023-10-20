import { Client } from "@henrotaym/api-client";
import SatisfactionCredential from "../../../api/credentials/SatisfactionCredential";
import useSatisfactionPluginProvider from "../../../composables/useSatisfactionPluginProvider";
import { App } from "vue";

class SatisfactionClientFactory {
  public create(app: App) {
    const provider = useSatisfactionPluginProvider(app);
    return new Client(new SatisfactionCredential(provider.get().url));
  }
}
export default SatisfactionClientFactory;
