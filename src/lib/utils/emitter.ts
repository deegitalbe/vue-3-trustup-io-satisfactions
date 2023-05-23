import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";
import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import UpdateNoteModal from "../components/modals/UpdateNoteModal.vue";
import Satisfaction from "../types/Satisfaction";
import { InitialField } from "../components/form/AddNote.vue";
import { SatisfactionFormBuilder } from "../composables/useCreateSatisfactionModal";

export const useComponentModal = <P extends Record<string, unknown>>(
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
  builder: SatisfactionFormBuilder;
}) => {
  return useComponentModal(CreateNoteModal, props);
};

export const useUpdateNoteModal = (props: {
  builder: SatisfactionFormBuilder;
  uuid: string;
}) => {
  return useComponentModal(UpdateNoteModal, props);
};
