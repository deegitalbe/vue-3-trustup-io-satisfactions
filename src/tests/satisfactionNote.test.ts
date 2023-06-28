// import { expect, test, vi } from "vitest";
// // import fetch from "node-fetch";

// import { useCreateSatisfaction, Origin } from "../lib";

// test("It can create a note", async () => {
//   const { onSuccess, builder } = useCreateSatisfaction({
//     origin: Origin.MARKETPLACE,
//     relatedToId: "1",
//     createdById: 1,
//     relatedToType: "user",
//   });
//   vi.mock("../useModal.ts");
//   onSuccess((note) => {
//     return note;
//   });
//   // await translation.init();
//   // await translation.addTranslationsByKey("worksite-admin");
//   const form = builder.build();
//   form.submit();
//   expect(
//     onSuccess((note) => {
//       return note;
//     })
//   ).toHaveProperty("user");
// });

// // test("Translation doesnt freeze when false appName init", async () => {
// //   const translation = new Translator({
// //     appName: "testastos",
// //   });

// //   const initialValue = { fr: {}, en: {}, de: {}, nl: {} };

// //   await translation.init();

// //   expect(translation.i18n.global.messages).toEqual(initialValue);
// // });

// // test("Translation doesnt freeze when false appName add", async () => {
// //   const translation = new Translator({
// //     appName: "trustup-pro",
// //   });

// //   await translation.init();

// //   const initialValue = { ...translation.i18n.global.messages };

// //   await translation.addTranslationsByKey("testatos");

// //   expect(translation.i18n.global.messages).toEqual(initialValue);
// // });
