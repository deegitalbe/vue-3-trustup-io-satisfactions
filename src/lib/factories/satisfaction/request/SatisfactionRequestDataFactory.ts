import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../../types/FormFields";

class SatisfactionRequestDataFactory {
  public create(fields: Reactive<SatisfactionFields>) {
    return {
      value: fields.value.value,
      origin: fields.origin.value,
      text: fields.text.value,
      created_by_id: fields.createdById.value,
      is_using: fields.isUsing.value === true ? 1 : 0,
      reason_id: Number(fields.reason.value),
      related_to_type: fields.relatedToType.value,
      related_to_id: fields.relatedToId.value,
    };
  }
}

export default SatisfactionRequestDataFactory;
