import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../types";
import Satisfaction from "../models/Satisfaction";
import StoreSatisfactionEndpoint from "../api/endpoints/StoreSatisfaction";
import { Loader } from "@henrotaym/helpers";

type OnSuccess = (note: Satisfaction) => void;

class SatisfactionStoreService {
  private _onSuccess?: (note: Satisfaction) => void;
  private _endpoint;
  private _loader;
  constructor(endpoint: StoreSatisfactionEndpoint, loader: Loader) {
    this._endpoint = endpoint;
    this._loader = loader;
  }
  public async store(fields: Reactive<SatisfactionFields>) {
    // call endpoint then call on succes.
    // TODO
    const attributes = await this._endpoint.store(fields);
    if (!attributes) return;
    const satisfaction = new Satisfaction(attributes);
    this._onSuccess?.(satisfaction);
    return satisfaction;
  }

  public onSuccess(onSuccess: OnSuccess) {
    this._onSuccess = onSuccess;
  }
}
export default SatisfactionStoreService;
