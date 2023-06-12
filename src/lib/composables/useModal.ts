import { useModal as useVueFinalModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";

const useModal = <P extends Record<string, unknown>>(
  modalComponent: Constructor,
  props: P
) => {
  const instance = useVueFinalModal({
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
export default useModal;
