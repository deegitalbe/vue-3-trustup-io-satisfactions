type ComposableAttributes = {
  open: () => void;
  close: () => void;
  onSuccess: (rating: Rating) => void;
};

export default ComposableAttributes;
