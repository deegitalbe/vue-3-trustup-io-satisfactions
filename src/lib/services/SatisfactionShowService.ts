import { Loader } from "@henrotaym/helpers";
import { SatisfactionEndpoint } from "../api/endpoints";
import Satisfaction from "../models/Satisfaction";
import SatisfactionAttributes from "../types/Satisfaction";
import { reactive } from "vue";
import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";

export class SatisfactionShowService {
  private _satisfaction!: Satisfaction;
  private _endpoint;
  private _loader;
  public builder;
  constructor(builder: SatisfactionFormBuilder) {
    this._endpoint = new SatisfactionEndpoint();
    this._loader = reactive(new Loader(false));
    this.builder = builder;
  }

  public async fetch(uuid: number) {
    const response = await this._loader.loadTill(async () => {
      const response = await this._endpoint.show(uuid);
      if (!response) return;
      this.setSatisfactionModel(response);
      return response;
    });
    if (response && this.isReady()) this.setForm();
  }

  public setSatisfactionModel(response: SatisfactionAttributes) {
    console.log(response);
    this._satisfaction = new Satisfaction(response);
  }

  private isEmpty(): this is {
    satisfaction: Satisfaction;
  } {
    return !this._satisfaction;
  }

  public isReady(): this is {
    satisfaction: Satisfaction;
    loader: { isLoading: false };
  } {
    return this._satisfaction !== undefined && !this._loader.isLoading;
  }

  public get satisfaction() {
    return this._satisfaction;
  }

  private setForm() {
    this.builder.setModel(this.satisfaction);
  }
  public get form() {
    return this.builder.build();
  }
}
