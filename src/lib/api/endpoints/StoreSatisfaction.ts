import { z } from "zod";
import SatisfactionClientFactory from "../../factories/satisfaction/client/SatisfactionClientFactory";
import StoreSatisfactionRequestFactory from "../../factories/satisfaction/request/StoreSatisfactionRequestFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../types";

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
class StoreSatisfactionEndpoint {
  private _requestFactory;
  private _clientFactory;
  constructor() {
    this._clientFactory = new SatisfactionClientFactory();
    this._requestFactory = new StoreSatisfactionRequestFactory();
  }

  async store(fields: Reactive<SatisfactionFields>) {
    const client = this._clientFactory.create();
    const request = this._requestFactory.create(fields);
    const response = await client.try(request);

    if (response?.failed()) return;
    return response?.response?.get();
  }
}

export default StoreSatisfactionEndpoint;
