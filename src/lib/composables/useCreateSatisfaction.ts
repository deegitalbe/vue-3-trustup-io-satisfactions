import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import { Origin } from "../enums";
import { useComponentModal } from "../utils/emitter";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import StoreService from "../factories/satisfaction/StoreService";
import { reactive } from "vue";

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

  const { open, close } = useComponentModal(CreateNoteModal, { builder });
  return { open, close, onSuccess: builder.onSuccess.bind(builder) };
};

export default useCreateSatisfaction;
