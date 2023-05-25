import { reactive } from "vue";
import { SatisfactionShowService } from "../services";
const useSatisfactionShowService = () =>
  reactive(new SatisfactionShowService());

export default useSatisfactionShowService;
