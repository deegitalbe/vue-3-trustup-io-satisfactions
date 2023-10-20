import { Reactive } from "@henrotaym/vue-3-forms";
import UpdateSatisfactionRequestFactory from "../../factories/satisfaction/request/UpdateSatisfactionRequestFactory";
import { SatisfactionFields } from "../../types";
import { Client } from "@henrotaym/api-client";

class UpdateSatisfactionEndpoint {
  private _requestFactory;
  private _client;

  constructor(
    client: Client,
    requestFactory: UpdateSatisfactionRequestFactory
  ) {
    this._client = client;
    this._requestFactory = requestFactory;
  }

  async update({
    fields,
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    const request = this._requestFactory.create({ fields, uuid });
    const response = await this._client.try(request);

    if (response?.failed()) return;
    return response?.response?.get();
  }
}

export default UpdateSatisfactionEndpoint;
