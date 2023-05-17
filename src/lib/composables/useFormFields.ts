import Joi from "joi";
// import useForm from "@henrotaym/vue-3-forms";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";

const useRatingsForm = () => {
  const ratings = new Field({
    label: "ratings",
    value: 2,
    validation: Joi.number().min(1).max(5),
  });

  const noteDetails = new Field({
    label: "note Details",
    value: "",
    validation: Joi.string().required(),
  });

  const isUsing = new Field({
    label: "Using app",
    value: true,
    validation: Joi.boolean().required(),
  });

  const reason = new Field({
    label: "Reasons",
    value: undefined,
    validation: Joi.string().required(),
  });

  // Creating form instance
  const form = useReactiveForm({
    ratings,
    noteDetails,
    isUsing,
    reason,
  });

  form.onSubmit(async () => {
    console.log(ratings.value);
  });

  return form;
};

export default useRatingsForm;
