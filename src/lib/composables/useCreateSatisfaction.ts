import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import { reactive } from "vue";
import { useModal } from "@henrotaymcorp/vue-modal";
import { Origin } from "../enums/Origin";
import { RelatedToType } from "../enums/RelatedToType";
import useStoreSatisfactionService from "./useStoreSatisfactionService";

export const useCreateSatisfaction = ({
  origin,
  createdById,
  relatedToId,
  relatedToType,
  isMarketplace,
}: {
  origin: Origin;
  createdById: number;
  relatedToId: string;
  relatedToType: RelatedToType;
  isMarketplace: boolean;
}) => {
  const service = useStoreSatisfactionService();
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
      isMarketplace: isMarketplace,
    });
  return {
    open,
    close,
    onSuccess: builder.onSuccess.bind(builder),
    builder,
  };
};

export default useCreateSatisfaction;
