import Reason from "./Reason";
import StoreSatisfactionEndpoint from "./StoreSatisfaction";
import UpdateSatisfactionEndpoint from "./UpdateSatisfaction";
import Satisfaction from "./Satisfaction";

const api = {
  storeSatisfaction: new StoreSatisfactionEndpoint(),
  updateSatisfaction: new UpdateSatisfactionEndpoint(),
  satisfaction: new Satisfaction(),
  reason: new Reason(),
};

export { Satisfaction as SatisfactionEndpoint };
export { Reason as ReasonEndpoint };
export { StoreSatisfactionEndpoint };
export { UpdateSatisfactionEndpoint };
export default api;
