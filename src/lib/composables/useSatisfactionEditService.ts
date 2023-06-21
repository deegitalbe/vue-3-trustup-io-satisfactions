import { reactive, UnwrapNestedRefs } from "vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import { SatisfactionEditService } from "../services";

export const useSatisfactionEditService = (
  builder: UnwrapNestedRefs<SatisfactionFormBuilder>,
  uuid: string
) => reactive(new SatisfactionEditService(builder, uuid));

export default useSatisfactionEditService;
