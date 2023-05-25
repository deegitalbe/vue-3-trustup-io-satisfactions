import { Loader } from "@henrotaym/helpers";
import { ReasonEndpoint } from "../api/endpoints";
import {
  Query,
  ReasonResponse,
  ReasonAttributes,
} from "../api/endpoints/Reason";
import Reason from "../models/Reason";

class ReasonIndexService {
  private _reasons?: Reason[];
  private _endpoint;
  private _loader;

  constructor() {
    this._endpoint = new ReasonEndpoint();
    this._loader = new Loader(false);
  }

  public async fetch(origin: Query) {
    return await this._loader.loadTill(async () => {
      const response = await this._endpoint.index(origin);
      if (!response) return;
      this.setArrayOfReasonModel(response);
    });
  }

  public setArrayOfReasonModel(response: ReasonResponse) {
    this._reasons = [];
    if (!this.isEmpty()) return;
    response.data.forEach((reason: ReasonAttributes) => {
      this.reasons?.push(new Reason(reason));
    });
  }

  private isEmpty(): this is {
    reasons: Reason[];
  } {
    return this._reasons?.length === 0;
  }

  public isReady(): this is {
    reasons: Reason[];
    loader: { isLoading: false };
  } {
    return this._reasons !== undefined && !this._loader.isLoading;
  }

  public get reasons() {
    return this._reasons;
  }
}
export default ReasonIndexService;
