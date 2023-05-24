import SatisfactionCredential from "./SatisfactionCredential";
import ReasonCredential from "./ReasonCredential";

const credentials = {
  SatisfactionCredential: new SatisfactionCredential(),
  ReasonCredential: new ReasonCredential(),
};

export { SatisfactionCredential, ReasonCredential };
export default credentials;
