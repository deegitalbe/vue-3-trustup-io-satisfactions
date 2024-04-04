import EditNoteModal from "../components/modals/EditNoteModal.vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import { useModal } from "@henrotaymcorp/vue-modal";
import useUpdateSatisfactionService from "./useUpdateSatisfactionService";

export const useEditSatisfaction = (uuid: string, isMarketplace: boolean) => {
  const builder = new SatisfactionFormBuilder();
  const { open: rawOpen, close } = useModal(EditNoteModal);

  const service = useUpdateSatisfactionService();

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
      isMarketplace: isMarketplace,
    });

  return {
    open,
    close,
    onSuccess: builder.onSuccess.bind(builder),
    builder,
    uuid,
  };
};

export default useEditSatisfaction;
