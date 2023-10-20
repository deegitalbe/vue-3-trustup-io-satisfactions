import { JsonCredential, Request } from "@henrotaym/api-client";

class SatisfactionCredential extends JsonCredential {
  protected url;
  constructor(url: string) {
    super();
    this.url = url;
  }
  prepare(request: Request): void {
    request.setBaseUrl(this.url);

    request.addHeaders({
      Accept: "application/json",
    });
  }
}

export default SatisfactionCredential;
