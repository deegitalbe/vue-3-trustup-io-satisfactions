import SatisfactionRequestFactory from "./SatisfactionRequestFactory";

class ShowSatisfactionRequestFactory {
  private _requestFactory;

  public constructor() {
    this._requestFactory = new SatisfactionRequestFactory();
  }

  public create(uuid: number) {
    const request = this._requestFactory.create();
    request.appendToBaseUrl("api/notes").setVerb("GET").setUrl(uuid.toString());

    return request;
  }
}

export default ShowSatisfactionRequestFactory;
