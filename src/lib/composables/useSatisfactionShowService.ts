import { reactive } from "vue";
import { SatisfactionShowService } from "../services/SatisfactionShowService";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
const useSatisfactionShowService = (builder: SatisfactionFormBuilder) =>
  reactive(new SatisfactionShowService(builder));

export default useSatisfactionShowService;
