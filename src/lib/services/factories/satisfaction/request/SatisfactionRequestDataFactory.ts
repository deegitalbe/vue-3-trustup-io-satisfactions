import { Reactive } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../../composables/useRatingsForm";

class SatisfactionRequestDataFactory {
  public create(fields: Reactive<Partial<RatingFields>>) {
    return {
      value: fields.ratings?.value,
      origin: fields.origin?.value,
      text: fields.noteDetails?.value,
      created_by_id: fields.createdById?.value,
      is_using: fields.isUsing?.value === true ? 1 : 0,
      reason_id: Number(fields.reason?.value),
      related_to_type: fields.relatedToType?.value,
      related_to_id: fields.relatedToId?.value,
    };
  }
}

export default SatisfactionRequestDataFactory;
