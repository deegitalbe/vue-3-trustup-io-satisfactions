import SatisfactionFormBuilder from "../builders/satisfaction/form/SatisfactionFormBuilder";
import useSatisfactionShowService from "../composables/useSatisfactionShowService";
import { UnwrapNestedRefs } from "vue";
class SatisfactionEditService {
  public builder;
  private _service;
  private _uuid;
  constructor(
    builder: UnwrapNestedRefs<SatisfactionFormBuilder>,
    uuid: string
  ) {
    this.builder = builder;
    this._service = useSatisfactionShowService();
    this._uuid = uuid;
  }

  public async setForm() {
    await this._service.fetch(Number(this._uuid));

    if (this._service.satisfaction && this._service.isReady())
      this.builder.setModel(this._service.satisfaction);
  }
  public get form() {
    return this.builder.build();
  }

  get service() {
    return this._service;
  }

  set service(service) {
    this._service = service;
  }
}
export default SatisfactionEditService;
