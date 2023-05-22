import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../../composables/useRatingsForm";
class StoreSatisfactionRequestFactory {
  private _requestFactory;
  private _requestDataFactory;
  public baseUrl: string;

  public constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._requestFactory = new SatisfactionRequestFactory();
    this._requestDataFactory = new SatisfactionRequestDataFactory();
    this.baseUrl = baseUrl;
  }

  public create(fields: Reactive<Partial<RatingFields>>) {
    const request = this._requestFactory.create();
    request
      .setBaseUrl(this.baseUrl)
      .appendToBaseUrl("api/notes")
      .setVerb("POST");
    const data = this._requestDataFactory.create(fields);
    request.addData(data).asForm(true);
    return request;
  }
}

export default StoreSatisfactionRequestFactory;
