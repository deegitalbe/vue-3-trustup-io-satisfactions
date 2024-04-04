import { z } from "zod";
import StoreSatisfactionRequestFactory from "../../factories/satisfaction/request/StoreSatisfactionRequestFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../types";
import { Client } from "@henrotaym/api-client";
import { SatisfactionAttributes } from "../../types/SatisfactionAttributes";

const QueryZ = z.object({
  value: z.number().gte(0).lte(5).int(),
  origin: z.enum(["marketplace", "tools"]),
  text: z.string().min(10),
  created_by_id: z.number().int(),
  is_using: z.number().min(0).max(1),
  reason_id: z.number().int().nullable(),
  related_to_type: z.string(),
  related_to_id: z.string(),
});
export type SatisfactionQuery = z.infer<typeof QueryZ>;
class StoreSatisfactionEndpoint {
  private _requestFactory;
  private _client;
  constructor(client: Client, requestFactory: StoreSatisfactionRequestFactory) {
    this._client = client;
    this._requestFactory = requestFactory;
  }

  async store(fields: Reactive<SatisfactionFields>) {
    const request = this._requestFactory.create(fields);

    const response = await this._client.try<SatisfactionAttributes>(request);

    if (response?.failed()) return;
    return response?.response?.get();
  }
}

export default StoreSatisfactionEndpoint;
