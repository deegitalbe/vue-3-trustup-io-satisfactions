import EditNoteModal from "../components/modals/EditNoteModal.vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import StoreService from "../factories/satisfaction/StoreService";
import { reactive } from "vue";
// import { notify } from ".";
import useModal from "./useModal";

export const useEditSatisfaction = (uuid: string) => {
  const builder = reactive(new SatisfactionFormBuilder());

  const modal = useModal(EditNoteModal, {
    builder,
    uuid,
  });

  const service = new StoreService();

  builder.onSubmit(async (form) => {
    const response = await service.update({ fields: form.fields, uuid });
    if (!response) return;
    //  if (!response) notify.useToasteoError();
    // notify.useToasteoSuccess();
    modal.close();
    return response;
  });

  return {
    open: modal.open,
    close: modal.close,
    onSuccess: builder.onSuccess.bind(builder),
  };
};

export default useEditSatisfaction;
