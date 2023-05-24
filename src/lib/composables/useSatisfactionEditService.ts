import { reactive } from "vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import { SatisfactionEditService } from "../services/SatisfactionEditService";
export const useSatisfactionEditService = (
  builder: SatisfactionFormBuilder,
  uuid: string
) => reactive(new SatisfactionEditService(builder, uuid));

export default useSatisfactionEditService;
