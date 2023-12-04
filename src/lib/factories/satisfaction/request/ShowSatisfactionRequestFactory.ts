import SatisfactionRequestFactory from "./SatisfactionRequestFactory";

class ShowSatisfactionRequestFactory {
  private _requestFactory;

  public constructor() {
    this._requestFactory = new SatisfactionRequestFactory();
  }

  public create(uuid: number) {
    const request = this._requestFactory.create();
    request.setUrl(`api/notes/${uuid.toString()}`).setVerb("GET");
    return request;
  }
}

export default ShowSatisfactionRequestFactory;
