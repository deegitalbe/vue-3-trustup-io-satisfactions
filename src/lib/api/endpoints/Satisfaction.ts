import { Client, Request } from "@henrotaym/api-client";
import { SatisfactionCredential } from "../credentials";
import { z } from "zod";

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
  private _client: Client;
  public baseUrl: string;
  constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._client = new Client(
      new SatisfactionCredential().beforeSending((request) =>
        request.setBaseUrl(this.baseUrl).appendToBaseUrl("api/notes")
      )
    );
    this.baseUrl = baseUrl;
  }

  async store(query: SatisfactionQuery) {
    console.log(query, "coucou");
    const request = new Request().setVerb("POST").addData(query).asForm(true);
    const response = await this._client.try(request);

    if (response?.failed()) return;
    console.log(response?.response?.get());
    return response?.response?.get();
  }
}

export default Satisfaction;
