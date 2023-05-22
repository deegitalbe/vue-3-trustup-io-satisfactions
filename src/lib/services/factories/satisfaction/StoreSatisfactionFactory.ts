import { Reactive, Field } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../composables/useRatingsForm";
import { SatisfactionQuery } from "../../../api/endpoints/Satisfaction";
export default class StoreSatisfactionFactory {
  private _satisfactionQuery;

  constructor(initData) {
    this._satisfactionQuery = {
      value: 0,
      origin: initData.origin as "marketplace" | "worksite",
      text: "",
      is_using: 1,
      related_to_id: initData.related_to_id as string,
      related_to_type: initData.related_to_type as string,
      created_by_id: initData.created_by_id,
      reason_id: 0,
    };
  }
  create(fields: Reactive<Partial<RatingFields>>) {
    this.setDirtyFieldValueAsData(fields);
    return this.getSatisfactionQuery();
  }

  private setDirtyFieldValueAsData(fields: Reactive<Partial<RatingFields>>) {
    Object.entries(fields).forEach((field) => {
      this.setNoteDetails(field[0], field[1] as Field);
      this.setRatings(field[0], field[1] as Field);
      this.setReason(field[0], field[1] as Field);
      this.setIsUsing(field[0], field[1] as Field);
    });
  }

  private setRatings(label, field: Field) {
    if (label !== "ratings") return;
    this.getSatisfactionQuery().value = field.value as number;
  }

  private setNoteDetails(label, field: Field) {
    if (label !== "noteDetails") return;
    this.getSatisfactionQuery().text = field.value as string;
  }

  private setIsUsing(label, field: Field) {
    if (label !== "isUSing") return;
    this.getSatisfactionQuery().is_using = field.value as number;
  }

  private setReason(label, field: Field) {
    if (label !== "reason") return;
    this.getSatisfactionQuery().reason_id = Number(field.value) as number;
  }

  private getSatisfactionQuery(): SatisfactionQuery {
    console.log(this._satisfactionQuery.created_by_id);
    return this._satisfactionQuery;
  }
}
