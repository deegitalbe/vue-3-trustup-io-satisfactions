import EditNoteModal from "../components/modals/EditNoteModal.vue";
import { useComponentModal } from "../utils/emitter";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import StoreService from "../factories/satisfaction/StoreService";
import { reactive } from "vue";
// import { notify } from ".";

export const useEditSatisfaction = (uuid: string) => {
  const builder = reactive(new SatisfactionFormBuilder());

  const { open, close } = useComponentModal(EditNoteModal, {
    builder,
    uuid,
  });

  const service = new StoreService();

  builder.onSubmit(async (form) => {
    const response = await service.update({ fields: form.fields, uuid });
    if (!response) return;
    //  if (!response) notify.useToasteoError();
    // notify.useToasteoSuccess();
    close();
    return response;
  });

  return { open, close, onSuccess: builder.onSuccess.bind(builder) };
};

export default useEditSatisfaction;
