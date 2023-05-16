import { Loader } from "@henrotaym/helpers";
import { ReasonEndpoint } from "../api/endpoints";
import {
  Query,
  ReasonResponse,
  ReasonAttributes,
} from "../api/endpoints/Reason";
import { Reason } from "../models/Reason";

export class ReasonRequest {
  private _reasons?: Reason[];
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new ReasonEndpoint();
    this._loader = new Loader(false);
  }

  public fetch(origin: Query) {
    return this._loader.loadTill(async () => {
      const response = await this._endpoint.index(origin);
      if (!response) return;
      this.setArrayOfReasonModel(response);
    });
  }

  public setArrayOfReasonModel(response: ReasonResponse) {
    response.data.forEach((reason: ReasonAttributes) => {
      this._reasons?.push(new Reason(reason));
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
