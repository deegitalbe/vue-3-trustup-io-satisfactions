import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import StoreService from "../factories/satisfaction/StoreService";
import { reactive } from "vue";
import Origin from "../enums/Origin";
import { useModal } from "@henrotaymcorp/vue-modal";

export const useCreateSatisfaction = ({
  origin,
  createdById,
  relatedToId,
  relatedToType,
}: {
  origin: Origin;
  createdById: number;
  relatedToId: string;
  relatedToType: string;
}) => {
  const service = new StoreService();

  const builder = reactive(new SatisfactionFormBuilder())
    .setOrigin(origin)
    .setCreatedById(createdById)
    .setRelatedToId(relatedToId)
    .setRelatedToType(relatedToType);

  builder.onSubmit(async (form) => await service.store(form.fields));

  // TODO
  const { open: rawOpen, close } = useModal(CreateNoteModal);
  const open = () =>
    rawOpen({
      builder: builder,
    });
  return {
    open,
    close,
    onSuccess: builder.onSuccess.bind(builder),
    builder,
  };
};

export default useCreateSatisfaction;
