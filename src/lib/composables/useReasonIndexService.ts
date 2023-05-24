import { reactive } from "vue";
import { ReasonIndexService } from "../services/ReasonIndexService";
const useReasonIndexService = () => reactive(new ReasonIndexService());
export default useReasonIndexService;
