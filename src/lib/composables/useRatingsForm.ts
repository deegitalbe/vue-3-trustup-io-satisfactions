import Joi from "joi";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";
import api from "../api/endpoints/index";
import { InitialField } from "../components/form/AddNote.vue";
import Satisfaction from "../types/Satisfaction";

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

const useRatingsForm = (initData: InitialField, callback) => {
  const ratings = new Field({
    label: "ratings",
    value: 2,
    validation: Joi.number().min(1).max(5),
  });

  const noteDetails = new Field({
    label: "note Details",
    value: "",
    validation: Joi.string().min(10).required(),
  });

  const isUsing = new Field({
    label: "Using app",
    value: true,
    validation: Joi.boolean().required(),
  });

  const reason = new Field({
    label: "Reasons",
    value: null,
    validation: Joi.number().required(),
  });

  const origin = new Field({
    label: "origin",
    value: initData.origin,
    validation: Joi.string(),
  });

  const createdById = new Field({
    label: "created_by_id",
    value: initData.created_by_id,
    validation: Joi.number(),
  });

  const relatedToId = new Field({
    label: "related_to_id",
    value: initData.related_to_id,
    validation: Joi.string(),
  });

  const relatedToType = new Field({
    label: "related_to_type",
    value: initData.related_to_type,
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

  const onSuccess = (response: Satisfaction) => {
    return { note: response };
  };

  form.onSubmit(async () => {
    const response = await api.storeSatisfaction.store(form.fields);
    if (!response) return;
    callback(onSuccess(response));
    form.clear();
  });

  return form;
};

export default useRatingsForm;
