import { reactive } from "vue";
import { ReasonRequest } from "../services/ReasonRequest";

const useReasonRequest = () => reactive(new ReasonRequest());
export default useReasonRequest;
