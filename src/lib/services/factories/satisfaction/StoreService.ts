import Satisfaction from "../../../types/Satisfaction";
import api from "../../../api/endpoints/index";
import { Reactive } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../composables/useRatingsForm";

type OnSuccess = (note: Satisfaction) => void;

class StoreService {
  private _onSuccess?: OnSuccess;
  public async store(fields: Reactive<RatingFields>) {
    // call endpoint then call on succes.
    const response = await api.storeSatisfaction.store(fields);
    if (!response) return;
    this._onSuccess?.(response);
  }

  public async update({
    fields,
    model,
  }: {
    fields: Reactive<RatingFields>;
    model: Satisfaction;
  }) {
    // call endpoint then call on succes.
    const response = await api.updateSatisfaction.update({ fields, model });
    if (!response) return;
    this._onSuccess?.(response);
  }

  public onSuccess(onSuccess: OnSuccess) {
    console.log(this._onSuccess);
    this._onSuccess = onSuccess;
  }
}
export default StoreService;
