import { Client } from "@henrotaym/api-client";
import SatisfactionCredential from "../../../api/credentials/SatisfactionCredential";

class SatisfactionClientFactory {
  public create() {
    return new Client(new SatisfactionCredential());
  }
}
export default SatisfactionClientFactory;
