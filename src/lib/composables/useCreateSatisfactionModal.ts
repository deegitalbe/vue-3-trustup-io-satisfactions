import { Origin } from "../enums";
import { useCreateNoteModal } from "../utils/emitter";
import useStoreService from "./useStoreService";
import Satisfaction from "../types/Satisfaction";

export type Attributes = {
  origin: Origin;
  related_to_id: string;
  related_to_type: string;
  created_by_id: number;
};

const useCreateSatisfaction = (data: Attributes, model?: Satisfaction) => {
  const service = useStoreService();
  const { open, close } = useCreateNoteModal({
    data,
    model,
    service,
  });
  return { open: open, close: close, onSuccess: service.onSuccess };
};

export default useCreateSatisfaction;
// // le model contiendra l'origin et les champs related_to, pas la peine de les spécifier du coup
//  const { open, close, onSuccess } = useEditSatisfaction(satisfactionUuid: string);

// enum Origin { }

// class Rating { }

// class StoreService {
//   private _onSuccess?: OnSuccess;
//   public store() {
//     // call endpoint then call on succes.
//     this._onSuccess?.(new Rating());
//   }

//   public onSuccess(onSuccess: OnSuccess) {
//     this._onSuccess = onSuccess;
//   }
// }

// const useStoreService = () => {
//   return reactive(new StoreService());
// };

// const useCreateModal = (attributes: Attributes) => {
//   const service = useStoreService();
//   const modal = useComponentModal(MyComponent, { ...attributes, service });

//   return {
//     onSuccess: service.onSuccess,
//     open: modal.open,
//     close: modal.close,
//   };
// };
