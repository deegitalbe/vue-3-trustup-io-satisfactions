import { reactive } from "vue";
import { SatisfactionNoteRequest } from "../services/SatisfactionNoteRequest";
const useSatisfactionNoteRequest = () =>
  reactive(new SatisfactionNoteRequest());
export default useSatisfactionNoteRequest;
