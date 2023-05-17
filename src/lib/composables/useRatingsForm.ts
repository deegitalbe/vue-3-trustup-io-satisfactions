import Joi from "joi";
// import useForm from "@henrotaym/vue-3-forms";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";
// import useSatisfactionNoteRequest from "./useSatisfactionNoteRequest";
// import { SatisfactionQuery } from "../api/endpoints/Satisfaction";
import CreateBuilder from "../services/builders/satisfaction/StoreBuilder";

// SEND DEFAULT PARAMS ON OPEN MODAL (LOADING THIS COMPOSABLE)

export type RatingFields = {
  ratings: Field<number>;
  noteDetails: Field<string>;
  isUsing: Field<boolean>;
  reason: Field<number | null>;
};
const useRatingsForm = () => {
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

  // Creating form instance
  const fields: RatingFields = {
    ratings,
    noteDetails,
    isUsing,
    reason,
  };
  const form = useReactiveForm(fields);

  const setData = () => {
    const builder = new CreateBuilder();
  };

  form.onSubmit(async () => {
    setData();
    // const builder = new CreateBuilder(form.dirtyFields);
    // TODO STORE ATTRS BUILDER
    // satisfactionNoteRequest.store();
  });

  return form;
};

export default useRatingsForm;
