import { Field } from "@henrotaym/vue-3-forms";

export type SatisfactionFields = {
  value: Field<number | undefined>;
  text: Field<string>;
  isUsing: Field<boolean>;
  reason: Field<number | null | string>;
  origin: Field<string>;
  createdById: Field<number>;
  relatedToId: Field<string>;
  relatedToType: Field<string>;
};
