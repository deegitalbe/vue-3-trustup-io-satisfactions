import { z } from "zod";
import SatisfactionClientFactory from "../../factories/satisfaction/client/SatisfactionClientFactory";
import ShowSatisfactionRequestFactory from "../../factories/satisfaction/request/ShowSatisfactionRequestFactory";

const QueryZ = z.object({
  value: z.number().gte(0).lte(5).int(),
  origin: z.enum(["marketplace", "worksite"]),
  text: z.string().min(10),
  created_by_id: z.number().int(),
  is_using: z.number().min(0).max(1),
  reason_id: z.number().int(),
  related_to_type: z.string(),
  related_to_id: z.string(),
});
export type SatisfactionQuery = z.infer<typeof QueryZ>;
class Satisfaction {
  private _requestFactory;
  private _clientFactory;
  constructor() {
    this._clientFactory = new SatisfactionClientFactory();
    this._requestFactory = new ShowSatisfactionRequestFactory();
  }

  // TODO PARSE
  async show(uuid: number) {
    const client = this._clientFactory.create();
    const request = this._requestFactory.create(uuid);
    const response = await client.try(request);
    if (response?.failed()) return;

    return response?.response?.get();
  }
}

export default Satisfaction;
