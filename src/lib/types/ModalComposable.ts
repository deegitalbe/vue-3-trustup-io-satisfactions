import Satisfaction from "./Satisfaction";

type ComposableAttributes = {
  open: () => void;
  close: () => void;
  onSuccess: (callback: (note: Satisfaction) => void) => void;
};

export default ComposableAttributes;
