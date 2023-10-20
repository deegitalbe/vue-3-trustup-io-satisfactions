interface GlobalProvider<TValue> {
  get(): TValue;
  set(value: TValue): void;
}

export default GlobalProvider;
