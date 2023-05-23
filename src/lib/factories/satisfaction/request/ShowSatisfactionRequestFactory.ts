import SatisfactionRequestFactory from "./SatisfactionRequestFactory";

class ShowSatisfactionRequestFactory {
  private _requestFactory;
  public baseUrl: string;

  public constructor(baseUrl = "https://satisfaction.trustup.io.test") {
    this._requestFactory = new SatisfactionRequestFactory();
    this.baseUrl = baseUrl;
  }

  public create(uuid: number) {
    const request = this._requestFactory.create();
    request
      .setBaseUrl(this.baseUrl)
      .appendToBaseUrl("api/notes")
      .setVerb("GET")
      .setUrl(uuid.toString());

    return request;
  }
}

export default ShowSatisfactionRequestFactory;
