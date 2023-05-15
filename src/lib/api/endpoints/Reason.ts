import { Client, Request } from "@henrotaym/api-client";
import { Loader } from "@henrotaym/helpers";
import ReasonCredential from "../credentials/ReasonCredential";
import { SafeParseError, ZodError, z } from "zod";

const QueryZ = z.object({
  origin: z.enum(["marketplace", "worksite"]),
});
type Query = z.infer<typeof QueryZ>;

const ResponseSchema = z.object({
  data: z
    .object({
      id: z.number(),
      title: z.string(),
      origin: z.enum(["marketplace", "worksite"]),
    })
    .array(),
});

export type ReasonResponse = z.infer<typeof ResponseSchema>;

class Reason {
  private _client: Client;
  private _loader;
  public baseUrl: string;

  constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._client = new Client(
      new ReasonCredential().beforeSending((request) =>
        request.setBaseUrl(this.baseUrl).appendToBaseUrl("api/reasons")
      )
    );
    this.baseUrl = baseUrl;
    this._loader = new Loader(false);
  }

  public get isLoading() {
    return this._loader.isLoading;
  }

  async index(query: Query): Promise<ReasonResponse | undefined> {
    const validation = QueryZ.safeParse(query);

    if (!validation.success) return;

    const request = new Request<ReasonResponse>()
      .setVerb("GET")
      .addQuery(query);
    const response = await this._loader.loadTill(() =>
      this._client.try(request)
    );

    if (response?.failed()) return;
    console.log(response?.response?.get());

    return ResponseSchema.parse(response?.response?.get());
  }
}

export default Reason;
