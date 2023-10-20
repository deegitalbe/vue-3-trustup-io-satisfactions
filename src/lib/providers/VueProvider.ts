import { inject, App } from "vue";
import GlobalProvider from "./GlobalProvider";

class VueProvider<TValue> implements GlobalProvider<TValue> {
  protected _identifier;
  protected _app;
  public constructor(options: { identifier: string; app: App }) {
    this._app = options.app;
    this._identifier = options.identifier;
  }
  get(): TValue {
    return this._app?.runWithContext(() => inject(this._identifier) as TValue);
  }
  set(value: TValue): void {
    this._app.provide(this._identifier, value);
  }
}

export default VueProvider;
