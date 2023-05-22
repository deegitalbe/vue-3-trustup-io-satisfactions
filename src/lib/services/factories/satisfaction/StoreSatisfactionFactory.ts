import { Reactive, Field } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../composables/useRatingsForm";
export default class StoreSatisfactionFactory {
  private _satisfactionQuery;

  constructor(initData) {
    this._satisfactionQuery = {
      value: "",
      origin: initData.origin,
      text: "",
      created_by: initData.createdBy,
      is_using: 1,
      professional_id: initData.professionalId,
      reason_id: 0,
    };
  }
  create(dirtyFields: Reactive<Partial<RatingFields>>) {
    this.setDirtyFieldValueAsData(dirtyFields);
    console.log(this.getSatisfactionQuery());
    return this.getSatisfactionQuery();
  }

  private setDirtyFieldValueAsData(
    dirtyFields: Reactive<Partial<RatingFields>>
  ) {
    Object.entries(dirtyFields).forEach((field) => {
      this.setNoteDetails(field[0], field[1] as Field);
      this.setRatings(field[0], field[1] as Field);
      this.setReason(field[0], field[1] as Field);
      this.setIsUsing(field[0], field[1] as Field);
    });
  }

  private setRatings(label, field: Field) {
    if (label !== "ratings") return;
    this.getSatisfactionQuery().value = field.value as string;
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

  private getSatisfactionQuery() {
    return this._satisfactionQuery;
  }
}
