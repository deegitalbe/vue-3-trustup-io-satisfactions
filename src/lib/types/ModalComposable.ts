type ComposableAttributes = {
  open: () => void;
  close: () => void;
  onSuccess: (callback: (rating: Rating) => void) => void;
};

export default ComposableAttributes;
