import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";
import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
import UpdateNoteModal from "../components/modals/UpdateNoteModal.vue";
import Satisfaction from "../types/Satisfaction";

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
      // onBeforeClose() {
      //   loadStop();
      // },
    },
  });
  return instance;
};

export const useCreateNoteModal = () => {
  return useComponentModal(CreateNoteModal, {});
};

export const useUpdateNoteModal = (props: { model: Satisfaction }) => {
  return useComponentModal(UpdateNoteModal, props);
};
