import { Loader } from "@henrotaym/helpers";
import { ReasonEndpoint } from "../api/endpoints";
import { ReasonResponse } from "../api/endpoints/Reason";

export class ReasonFetcher {
  private _reasons?: ReasonResponse;
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new ReasonEndpoint();
    this._loader = new Loader(false);
  }

  public fetch() {
    return this._loader.loadTill(async () => {
      const response = await this._endpoint.index({
        origin: "worksite",
      });
      this._reasons = response;
    });
  }

  public isReady(): this is {
    reasons: ReasonResponse;
  } {
    return this._reasons !== undefined && !this._loader.isLoading;
  }

  public get reasons() {
    return this._reasons;
  }
}
