import { Loader } from "@henrotaym/helpers";
import { SatisfactionEndpoint } from "../api/endpoints";
import { SatisfactionQuery } from "../api/endpoints/Satisfaction";
import { Satisfaction } from "../types";

export class SatisfactionNoteRequest {
  private _satisfaction?: SatisfactionQuery;
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new SatisfactionEndpoint();
    this._loader = new Loader(false);
  }

  public store(query: SatisfactionQuery) {
    console.log(query);
    return this._loader.loadTill(async () => {
      const response = await this._endpoint.store(query);
      this._satisfaction = response;
    });
  }

  public isReady(): this is {
    satisfactions: Satisfaction;
  } {
    return this._satisfaction !== undefined && !this._loader.isLoading;
  }

  public get satisfaction() {
    return this._satisfaction;
  }
}
