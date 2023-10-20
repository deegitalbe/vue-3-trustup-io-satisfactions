import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../types";
import Satisfaction from "../models/Satisfaction";
import { Loader } from "@henrotaym/helpers";
import UpdateSatisfactionEndpoint from "../api/endpoints/UpdateSatisfaction";

type OnSuccess = (note: Satisfaction) => void;

class SatisfactionUpdateService {
  private _onSuccess?: (note: Satisfaction) => void;
  private _endpoint;
  private _loader;
  constructor(endpoint: UpdateSatisfactionEndpoint, loader: Loader) {
    this._endpoint = endpoint;
    this._loader = loader;
  }

  public async update({
    fields,
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    // call endpoint then call on succes.
    // TODO
    const response = await this._endpoint.update({ fields, uuid });
    if (!response) return;
    this._onSuccess?.(response);
    return response;
  }

  public onSuccess(onSuccess: OnSuccess) {
    this._onSuccess = onSuccess;
  }
}
export default SatisfactionUpdateService;
