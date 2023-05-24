import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../../types/FormFields";
import { ApiRequestData } from "@henrotaym/api-client/dist/types/requests";

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
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    const request = this._requestFactory.create();
    request
      .setBaseUrl(this.baseUrl)
      .appendToBaseUrl("api/notes")
      .setVerb("PATCH");
    request
      .addData(this._requestDataFactory.create(fields) as ApiRequestData)
      .asForm(true);
    request.setUrl(uuid);

    return request;
  }
}

export default UpdateSatisfactionRequestFactory;
