import SatisfactionClientFactory from "../../factories/satisfaction/client/SatisfactionClientFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../types/FormFields";
import UpdateSatisfactionRequestFactory from "../../factories/satisfaction/request/UpdateSatisfactionRequestFactory";

class UpdateSatisfactionEndpoint {
  private _requestFactory;
  private _clientFactory;
  constructor() {
    this._clientFactory = new SatisfactionClientFactory();
    this._requestFactory = new UpdateSatisfactionRequestFactory();
  }

  async update({
    fields,
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    const client = this._clientFactory.create();
    const request = this._requestFactory.create({ fields, uuid });
    const response = await client.try(request);

    if (response?.failed()) return;
    return response?.response?.get();
  }
}

export default UpdateSatisfactionEndpoint;
