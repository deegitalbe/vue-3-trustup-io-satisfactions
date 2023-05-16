import { Loader } from "@henrotaym/helpers";
import { SatisfactionEndpoint } from "../api/endpoints";
import { SatisfactionQuery } from "../api/endpoints/Satisfaction";

export class SatisfactionNoteRequest {
  private _satisfaction?: ReasonResponse;
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new SatisfactionEndpoint();
    this._loader = new Loader(false);
  }

  public store(query: SatisfactionQuery) {
    return this._loader.loadTill(async () => {
      const response = await this._endpoint.store(query);
      this._satisfaction = response;
    });
  }

  // public isReady(): this is {
  //   satisfactions: TBD;
  // } {
  //   return this._satisfaction !== undefined && !this._loader.isLoading;
  // }

  public get satisfaction() {
    return this._satisfaction;
  }
}
