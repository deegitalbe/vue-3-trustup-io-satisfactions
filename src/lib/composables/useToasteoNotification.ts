import { useToasteo } from "@deegital/vue-trustup-io-toasteo";

const toasteo = useToasteo();

export const useToasteoSuccess = (
  title: string | undefined = "Vos modifications ont bien été enregistrées"
) => {
  toasteo.success({
    title,
    timer: 5000,
    showUndo: true,
  });
};

export const useToasteoError = (
  title: string | undefined = "Something went wrong!",
  text: string | undefined = "There was an error with your last action."
) => {
  toasteo.error({
    title,
    text,
    timer: 5000,
    showUndo: true,
  });
};
export default { useToasteoSuccess, useToasteoError };
