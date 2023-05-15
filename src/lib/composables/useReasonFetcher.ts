import { reactive } from "vue";
import { ReasonFetcher } from "../services/ReasonFetcher";

export const useReasonFetcher = () => reactive(new ReasonFetcher());
