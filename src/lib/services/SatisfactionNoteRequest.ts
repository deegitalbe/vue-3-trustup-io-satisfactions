import { SatisfactionEndpoint } from "../api/endpoints";
import { SatisfactionQuery } from "../api/endpoints/StoreSatisfaction";

export class SatisfactionNoteRequest {
  private _endpoint;

  constructor() {
    this._endpoint = new SatisfactionEndpoint();
  }

  public async store(query: SatisfactionQuery) {
    const response = await this._endpoint.store(query);
    return response;
  }
}
