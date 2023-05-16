import { Client, Request } from "@henrotaym/api-client";
import { SatisfactionCredential } from "../credentials";
import { z } from "zod";

const QueryZ = z.object({
  value: z.number().gte(0).lte(5).int(),
  origin: z.enum(["marketplace", "worksite"]),
  text: z.string().min(10),
  created_by: z.number().int(),
  is_using: z.boolean(),
  professional_id: z.number().int(),
  reason_id: z.number().int(),
});
export type SatisfactionQuery = z.infer<typeof QueryZ>;
class Satisfaction {
  private _client: Client;
  public baseUrl: string;
  constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._client = new Client(
      new SatisfactionCredential().beforeSending((request) =>
        request.appendToBaseUrl("api/notes")
      )
    );
    this.baseUrl = baseUrl;
  }

  async store(query: SatisfactionQuery) {
    const request = new Request().setVerb("POST").addData(query);
    const response = await this._client.try(request);

    if (response?.failed()) return;

    return response?.response?.get();
  }
}

export default Satisfaction;
