import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../types";
import api from "../../api/endpoints/index";
import Satisfaction from "../../models/Satisfaction";

type OnSuccess = (note: Satisfaction) => void;

class StoreService {
  private _onSuccess?: (note: Satisfaction) => void;

  public async store(fields: Reactive<SatisfactionFields>) {
    // call endpoint then call on succes.
    const response = await api.storeSatisfaction.store(fields);
    if (!response) return;
    this._onSuccess?.(response);
    return response;
  }

  public async update({
    fields,
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    // call endpoint then call on succes.
    const response = await api.updateSatisfaction.update({ fields, uuid });
    if (!response) return;
    this._onSuccess?.(response);
    return response;
  }

  public onSuccess(onSuccess: OnSuccess) {
    this._onSuccess = onSuccess;
  }
}
export default StoreService;
