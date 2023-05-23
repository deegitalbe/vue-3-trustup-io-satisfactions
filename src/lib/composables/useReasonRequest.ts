import { reactive } from "vue";
import { ReasonRequest } from "../services/ReasonRequest";
import { InitialField } from "../components/form/AddNote.vue";
import { Satisfaction } from "../types";
import CreateNoteModal from "../components/modals/CreateNoteModal.vue";
const useReasonRequest = () => reactive(new ReasonRequest());
export default useReasonRequest;

export const useCreateNoteModal = (props: { data: InitialField }) => {
  
  return useComponentModal(CreateNoteModal, props);
};
