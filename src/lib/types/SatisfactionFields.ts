import { Field } from "@henrotaym/vue-3-forms";
import { Origin } from "../enums/Origin";
import { RelatedToType } from "../enums/RelatedToType";

export type SatisfactionFields = {
  value: Field<number | undefined>;
  text: Field<string>;
  isUsing: Field<boolean>;
  reason: Field<number | null | string>;
  origin: Field<Origin>;
  createdById: Field<number>;
  relatedToId: Field<string>;
  relatedToType: Field<RelatedToType>;
};
