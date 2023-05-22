import { Loader } from "@henrotaym/helpers";
import { SatisfactionEndpoint } from "../api/endpoints";
import { SatisfactionQuery } from "../api/endpoints/Satisfaction";

export class SatisfactionNoteRequest {
  private _satisfaction?: SatisfactionQuery;
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new SatisfactionEndpoint();
    this._loader = new Loader(false);
  }

  public async store(query: SatisfactionQuery) {
    const response = await this._endpoint.store(query);
    return response;
  }
}
