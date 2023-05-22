import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";
import { RatingFields } from "../../../../composables/useUpdateRatingsForm ";
import Satisfaction from "../../../../types/Satisfaction";
import { Reactive } from "@henrotaym/vue-3-forms";

class UpdateSatisfactionRequestFactory {
  private _requestFactory;
  private _requestDataFactory;
  public baseUrl: string;

  public constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._requestFactory = new SatisfactionRequestFactory();
    this._requestDataFactory = new SatisfactionRequestDataFactory();
    this.baseUrl = baseUrl;
  }

  public create({
    fields,
    model,
  }: {
    fields: Reactive<RatingFields>;
    model: Satisfaction;
  }) {
    const request = this._requestFactory.create();
    request
      .setBaseUrl(this.baseUrl)
      .appendToBaseUrl("api/notes")
      .setVerb("PATCH");
    request.addData(this._requestDataFactory.create(fields)).asForm(true);
    request.setUrl(model.data.id.toString());

    return request;
  }
}

export default UpdateSatisfactionRequestFactory;
