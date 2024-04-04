import { z } from "zod";
import ShowSatisfactionRequestFactory from "../../factories/satisfaction/request/ShowSatisfactionRequestFactory";
import { Client } from "@henrotaym/api-client";

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
class Satisfaction {
  private _client;
  private _requestFactory;
  // ShowSatisfactionRequestFactory
  constructor(client: Client, _requestFactory: ShowSatisfactionRequestFactory) {
    this._client = client;
    this._requestFactory = _requestFactory;
  }

  async show(uuid: number) {
    const request = this._requestFactory.create(uuid);
    const response = await this._client.try(request);
    if (response?.failed()) return;

    return response?.response?.get();
  }
}

export default Satisfaction;
