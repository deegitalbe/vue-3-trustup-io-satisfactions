import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";
import { Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../../types";
import { ApiRequestData } from "@henrotaym/api-client/dist/types/requests";

class UpdateSatisfactionRequestFactory {
  private _requestFactory;
  private _requestDataFactory;

  public constructor() {
    this._requestFactory = new SatisfactionRequestFactory();
    this._requestDataFactory = new SatisfactionRequestDataFactory();
  }

  public create({
    fields,
    uuid,
  }: {
    fields: Reactive<SatisfactionFields>;
    uuid: string;
  }) {
    const request = this._requestFactory.create();
    request.setUrl("api/notes").setVerb("PATCH");
    request
      .addData(this._requestDataFactory.create(fields) as ApiRequestData)
      .asForm(true);
    request.setUrl(uuid);

    return request;
  }
}

export default UpdateSatisfactionRequestFactory;
