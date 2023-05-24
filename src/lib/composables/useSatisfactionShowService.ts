import { reactive } from "vue";
import { SatisfactionShowService } from "../services/SatisfactionShowService";
const useSatisfactionShowService = () =>
  reactive(new SatisfactionShowService());

export default useSatisfactionShowService;
