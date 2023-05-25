import { reactive } from "vue";
import { ReasonIndexService } from "../services";
const useReasonIndexService = () => reactive(new ReasonIndexService());
export default useReasonIndexService;
