import { computed } from "vue";
import Selectables from "./useSelectables";
import Reason from "../models/Reason";

const useSelectableReason = (reasons: Reason[]) => {
  const selectables = computed(() => {
    return Selectables.useSelectable(reasons, (element: Reason) => ({
      id: element.id.toString(),
      label: element.title,
      value: element.title,
    }));
  });
  return { selectables };
};
export default useSelectableReason;
