import Joi from "joi";
// import useForm from "@henrotaym/vue-3-forms";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";

const useRatingsForm = () => {
  const ratings = new Field({
    label: "ratings",
    value: 0,
    validation: Joi.number().min(1).max(5),
  });

  const noteDetails = new Field({
    label: "noteDetails",
    value: "",
    validation: Joi.string().required(),
  });

  const isUsing = new Field({
    label: "isUsing",
    value: true,
    validation: Joi.boolean().required(),
  });

  const reason = new Field({
    label: "Reasons",
    value: "",
    validation: Joi.string().required(),
  });

  // Creating form instance
  const form = useReactiveForm({
    ratings,
    noteDetails,
    isUsing,
    reason,
  });
  // const test = () => {
  //   console.log("couocu");
  // };
  // form.onSubmit(async () => test());

  return form;
};

export default useRatingsForm;
