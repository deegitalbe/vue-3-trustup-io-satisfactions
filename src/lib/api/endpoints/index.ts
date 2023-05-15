import Satisfaction from "./Satisfaction";
import Reason from "./Reason";

const api = {
  satisfaction: new Satisfaction(),
  reason: new Reason(),
};

export { Satisfaction as SatisfactionEndpoint };
export { Reason as ReasonEndpoint };

export default api;
