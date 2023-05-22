import SatisfactionClientFactory from "../../services/factories/satisfaction/client/SatisfactionClientFactory";
import UpdateSatisfactionRequestFactory from "../../services/factories/satisfaction/request/UpdateSatisfactionRequestFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../composables/useUpdateRatingsForm ";
import Satisfaction from "../../types/Satisfaction";

class UpdateSatisfactionEndpoint {
  private _requestFactory;
  private _clientFactory;
  constructor() {
    this._clientFactory = new SatisfactionClientFactory();
    this._requestFactory = new UpdateSatisfactionRequestFactory();
  }

  async update({
    fields,
    model,
  }: {
    fields: Reactive<RatingFields>;
    model: Satisfaction;
  }) {
    const client = this._clientFactory.create();
    const request = this._requestFactory.create({ fields, model });
    const response = await client.try(request);

    if (response?.failed()) return;
    return response?.response?.get();
  }
}

export default UpdateSatisfactionEndpoint;
