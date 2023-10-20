import { Client, Request } from "@henrotaym/api-client";
import { z } from "zod";
import ORIGIN from "../../enums/Origin";

const queryZ = z.object({
  origin: z.nativeEnum(ORIGIN),
});
export type Query = z.infer<typeof queryZ>;

const reasonAttributes = z.object({
  id: z.number(),
  title: z.string(),
  origin: z.nativeEnum(ORIGIN),
});
export type ReasonAttributes = z.infer<typeof reasonAttributes>;

const ResponseSchema = z.object({
  data: reasonAttributes.array(),
});

export type ReasonResponse = z.infer<typeof ResponseSchema>;

class Reason {
  private _client: Client;
  constructor(client: Client) {
    this._client = client;
  }

  async index(query: Query): Promise<ReasonResponse | undefined> {
    const validation = queryZ.safeParse(query);

    if (!validation.success) return;

    const request = new Request<ReasonResponse>()
      .setVerb("GET")
      .addQuery(query)
      .setUrl("api/reasons");
    const response = await this._client.try(request);

    if (response?.failed()) return;

    return ResponseSchema.parse(response?.response?.get());
  }
}

export default Reason;
