import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";
import AddNote from "../components/modals/AddNote.vue";

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

export const useAddNote = () => {
  return useComponentModal(AddNote, {});
};
