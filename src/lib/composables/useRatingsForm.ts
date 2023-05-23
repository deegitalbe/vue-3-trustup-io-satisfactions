// import Joi from "joi";
// import { Field, useReactiveForm } from "@henrotaym/vue-3-forms";
// import { InitialField } from "../components/form/AddNote.vue";
// import StoreService from "../factories/satisfaction/StoreService";
// import { SatisfactionFields } from "../types/FormFields";

// // SEND DEFAULT PARAMS ON OPEN MODAL (LOADING THIS COMPOSABLE)

// export type K = keyof SatisfactionFields;

// const useRatingsForm = (initData: InitialField, service: StoreService) => {
//   const value = new Field({
//     label: "value",
//     value: 2,
//     validation: Joi.number().min(1).max(5),
//   });

//   const text = new Field({
//     label: "text",
//     value: "",
//     validation: Joi.string().min(10).required(),
//   });

//   const isUsing = new Field({
//     label: "Using app",
//     value: true,
//     validation: Joi.boolean().required(),
//   });

//   const reason = new Field({
//     label: "Reasons",
//     value: null,
//     validation: Joi.number().required(),
//   });

//   const origin = new Field({
//     label: "origin",
//     value: initData.origin,
//     validation: Joi.string(),
//   });

//   const createdById = new Field({
//     label: "created_by_id",
//     value: initData.created_by_id,
//     validation: Joi.number(),
//   });

//   const relatedToId = new Field({
//     label: "related_to_id",
//     value: initData.related_to_id,
//     validation: Joi.string(),
//   });

//   const relatedToType = new Field({
//     label: "related_to_type",
//     value: initData.related_to_type,
//     validation: Joi.string(),
//   });

//   // Creating form instance
//   const fields: SatisfactionFields = {
//     value,
//     text,
//     isUsing,
//     reason,
//     origin,
//     createdById,
//     relatedToId,
//     relatedToType,
//   };
//   const form = useReactiveForm(fields);

//   form.onSubmit(async () => {
//     service.store(form.fields);
//     form.clear();
//   });

//   return form;
// };

// export default useRatingsForm;
