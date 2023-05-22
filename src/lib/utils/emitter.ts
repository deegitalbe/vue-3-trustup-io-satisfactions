import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";
import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import UpdateNoteModal from "../components/modals/UpdateNoteModal.vue";
import Satisfaction from "../types/Satisfaction";
import { InitialField } from "../components/form/AddNote.vue";

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
      // onSuccess: (callback: (rating: Rating) => void),
    },
  });
  return instance;
};

export const useCreateNoteModal = (props: {
  data: InitialField;
  callback: () => void;
}) => {
  return useComponentModal(CreateNoteModal, props);
};

export const useUpdateNoteModal = (props: { model: Satisfaction }) => {
  return useComponentModal(UpdateNoteModal, props);
};
