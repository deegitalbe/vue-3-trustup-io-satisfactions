import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../../types";
import { ApiRequestData } from "@henrotaym/api-client/dist/types/requests";
class StoreSatisfactionRequestFactory {
  private _requestFactory;
  private _requestDataFactory;

  public constructor(
    requestFactory: SatisfactionRequestFactory,
    requestDataFactory: SatisfactionRequestDataFactory
  ) {
    this._requestFactory = requestFactory;
    this._requestDataFactory = requestDataFactory;
  }

  public create(fields: Reactive<SatisfactionFields>) {
    const request = this._requestFactory.create();
    request.setUrl("api/notes").setVerb("POST");

    const data = this._requestDataFactory.create(fields);
    request.addData(data as ApiRequestData).asForm(true);
    return request;
  }
}

export default StoreSatisfactionRequestFactory;
