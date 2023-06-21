import EditNoteModal from "../components/modals/EditNoteModal.vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import StoreService from "../factories/satisfaction/StoreService";
// import { notify } from ".";
import { useModal } from "@henrotaymcorp/vue-modal";

export const useEditSatisfaction = (uuid: string) => {
  const builder = new SatisfactionFormBuilder();
  console.log("coucou useEditSatisfaction triggered");
  const { open: rawOpen, close } = useModal(EditNoteModal);

  const service = new StoreService();

  builder.onSubmit(async (form) => {
    const response = await service.update({ fields: form.fields, uuid });
    if (!response) return;
    //  if (!response) notify.useToasteoError();
    // notify.useToasteoSuccess();
    return response;
  });

  const open = () =>
    rawOpen({
      builder: builder,
      uuid: uuid,
    });

  return {
    open,
    close,
    onSuccess: builder.onSuccess.bind(builder),
  };
};

export default useEditSatisfaction;
