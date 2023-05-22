import { Origin } from "../enums";
import { useCreateNoteModal } from "../utils/emitter";
import { InitialField } from "../components/form/AddNote.vue";

const useCreateSatisfaction = (
  origin: Origin,
  related_to_id: string,
  related_to_type: string,
  created_by_id: number
) => {
  const data: InitialField = {
    origin: origin,
    related_to_id: related_to_id,
    related_to_type: related_to_type,
    created_by_id: created_by_id,
  };
  const { open, close } = useCreateNoteModal({ data });
  return { open, close };
};

export default useCreateSatisfaction;
// // le model contiendra l'origin et les champs related_to, pas la peine de les spécifier du coup
//  const { open, close, onSuccess } = useEditSatisfaction(satisfactionUuid: string);
