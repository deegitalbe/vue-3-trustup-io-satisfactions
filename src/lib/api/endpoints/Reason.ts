import { Client, Request } from "@henrotaym/api-client";
import ReasonCredential from "../credentials/ReasonCredential";
import { z } from "zod";

const queryZ = z.object({
  origin: z.enum(["marketplace", "worksite"]),
});
export type Query = z.infer<typeof queryZ>;

const reasonAttributes = z.object({
  id: z.number(),
  title: z.string(),
  origin: z.enum(["marketplace", "worksite"]),
});
export type ReasonAttributes = z.infer<typeof reasonAttributes>;

const ResponseSchema = z.object({
  data: reasonAttributes.array(),
});

export type ReasonResponse = z.infer<typeof ResponseSchema>;

class Reason {
  private _client: Client;
  public baseUrl: string;

  constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._client = new Client(
      new ReasonCredential().beforeSending((request) =>
        request.setBaseUrl(this.baseUrl).appendToBaseUrl("api/reasons")
      )
    );
    this.baseUrl = baseUrl;
  }
  async index(query: Query): Promise<ReasonResponse | undefined> {
    const validation = queryZ.safeParse(query);

    if (!validation.success) return;

    const request = new Request<ReasonResponse>()
      .setVerb("GET")
      .addQuery(query);
    const response = await this._client.try(request);

    if (response?.failed()) return;
    console.log(response?.response?.get());

    return ResponseSchema.parse(response?.response?.get());
  }
}

export default Reason;
