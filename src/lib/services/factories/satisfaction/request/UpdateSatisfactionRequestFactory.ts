import SatisfactionRequestFactory from "./SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "./SatisfactionRequestDataFactory";

class UpdateSatisfactionRequestFactory {
  private _requestFactory;
  private _requestDataFactory;
  public constructor() {
    this._requestFactory = new SatisfactionRequestFactory();
    this._requestDataFactory = new SatisfactionRequestDataFactory();
  }

  public create({ fields, model }) {
    const request = this._requestFactory.create();
    request.addData(this._requestDataFactory.create(fields));
    request.setUrl(model.uuid);

    return request;
  }
}

export default UpdateSatisfactionRequestFactory;
