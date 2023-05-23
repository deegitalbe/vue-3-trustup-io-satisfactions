import Joi from "joi";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";
import { Satisfaction } from "../types/Satisfaction";
import StoreService from "../services/factories/satisfaction/StoreService";

// SEND DEFAULT PARAMS ON OPEN MODAL (LOADING THIS COMPOSABLE)

export type RatingFields = {
  ratings: Field<number>;
  noteDetails: Field<string>;
  isUsing: Field<boolean>;
  reason: Field<number | null>;
  origin: Field<string>;
  createdById: Field<number>;
  relatedToId: Field<string>;
  relatedToType: Field<string>;
};

export type K = keyof RatingFields;

const useUpdateRatingsForm = (model: Satisfaction, service: StoreService) => {
  const ratings = new Field({
    label: "ratings",
    value: model?.data.value,
    validation: Joi.number().min(1).max(5),
  });

  const noteDetails = new Field({
    label: "note Details",
    value: model?.data.text,
    validation: Joi.string().min(10).required(),
  });

  const isUsing = new Field({
    label: "Using app",
    value: model?.data.is_using,
    validation: Joi.boolean().required(),
  });

  const reason = new Field({
    label: "Reasons",
    value: model?.data.reason.id,
    validation: Joi.number().required(),
  });

  const origin = new Field({
    label: "origin",
    value: model.data.origin,
    validation: Joi.string(),
  });

  const createdById = new Field({
    label: "created_by_id",
    value: model.data.created_by_id,
    validation: Joi.number(),
  });

  const relatedToId = new Field({
    label: "related_to_id",
    value: model.data.related_to_id,
    validation: Joi.string(),
  });

  const relatedToType = new Field({
    label: "related_to_type",
    value: model.data.related_to_type,
    validation: Joi.string(),
  });

  // Creating form instance
  const fields: RatingFields = {
    ratings,
    noteDetails,
    isUsing,
    reason,
    origin,
    createdById,
    relatedToId,
    relatedToType,
  };
  const form = useReactiveForm(fields);

  form.onSubmit(async () => {
    service.update({ fields, model });
    form.clear();
  });

  return form;
};

export default useUpdateRatingsForm;
