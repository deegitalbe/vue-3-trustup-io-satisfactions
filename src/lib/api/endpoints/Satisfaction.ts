import { Client, Request } from "@henrotaym/api-client";
import { Loader } from "@henrotaym/helpers";
import { SatisfactionCredential } from "../credentials";
class Satisfaction {
  private _client: Client;
  private _loader;
  public baseUrl: string;
  constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._client = new Client(
      new SatisfactionCredential().beforeSending((request) =>
        request.appendToBaseUrl("api/notes")
      )
    );
    this.baseUrl = baseUrl;
    this._loader = new Loader(false);
  }

  public get isLoading() {
    return this._loader.isLoading;
  }

  async store() {
    const request = new Request().setVerb("POST");
    const response = await this._loader.loadTill(() =>
      this._client.try(request)
    );

    if (response?.failed()) return;

    return response?.response?.get();
  }
}

export default Satisfaction;
