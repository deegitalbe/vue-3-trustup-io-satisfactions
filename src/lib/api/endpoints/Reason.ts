import { Client, Request } from "@henrotaym/api-client";
import { Loader } from "@henrotaym/helpers";
import ReasonCredential from "../credentials/ReasonCredential";

class Reason {
  private _client: Client;
  private _loader;

  constructor() {
    this._client = new Client(
      new ReasonCredential().beforeSending((request) =>
        request.appendToBaseUrl("api/notes")
      )
    );
    this._loader = new Loader(false);
  }

  public get isLoading() {
    return this._loader.isLoading;
  }

  async index(query: { origin: string }) {
    const request = new Request().setVerb("GET").addQuery(query);
    const response = await this._loader.loadTill(() =>
      this._client.try(request)
    );

    if (response?.failed()) return;

    return response?.response?.get();
  }
}

export default Reason;
