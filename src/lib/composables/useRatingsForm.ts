import Joi from "joi";
import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";
import StoreSatisfactionFactory from "../services/factories/satisfaction/StoreSatisfactionFactory";
import { SatisfactionNoteRequest } from "../services/SatisfactionNoteRequest";
import { reactive } from "vue";

// SEND DEFAULT PARAMS ON OPEN MODAL (LOADING THIS COMPOSABLE)

export type RatingFields = {
  ratings: Field<number>;
  noteDetails: Field<string>;
  isUsing: Field<boolean>;
  reason: Field<number | null>;
};

const useRatingsForm = (initData) => {
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

  form.onSubmit(async () => {
    const factory = new StoreSatisfactionFactory(initData);
    const query = factory.create(form.fields);
    const satisfactionNoteRequest = reactive(new SatisfactionNoteRequest());
    const response = satisfactionNoteRequest.store(query);
    if (!response) return;
    console.log("SHOULD CLEAR");
    form.clear();
  });

  return form;
};

export default useRatingsForm;
