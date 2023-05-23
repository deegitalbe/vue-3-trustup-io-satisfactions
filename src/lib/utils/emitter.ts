import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";
import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import Satisfaction from "../types/Satisfaction";
import { InitialField } from "../components/form/AddNote.vue";
import StoreService from "../services/factories/satisfaction/StoreService";

const useComponentModal = <P extends Record<string, unknown>>(
  modalComponent: Constructor,
  props: P
) => {
  const instance = useModal({
    component: modalComponent,
    attrs: {
      ...props,
      onClose() {
        instance.close();
      },
    },
  });
  return instance;
};

export const useCreateNoteModal = (props: {
  data: InitialField;
  model?: Satisfaction;
  service: StoreService;
}) => {
  return useComponentModal(CreateNoteModal, props);
};
