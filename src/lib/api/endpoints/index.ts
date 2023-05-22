import Satisfaction from "./StoreSatisfaction";
import Reason from "./Reason";
import StoreSatisfactionEndpoint from "./StoreSatisfaction";
import UpdateSatisfactionEndpoint from "./UpdateSatisfaction";

const api = {
  storeSatisfaction: new StoreSatisfactionEndpoint(),
  updateSatisfaction: new UpdateSatisfactionEndpoint(),

  reason: new Reason(),
};

export { Satisfaction as SatisfactionEndpoint };
export { Reason as ReasonEndpoint };

export default api;
