import { JsonCredential, Request } from "@henrotaym/api-client";

class SatisfactionCredential extends JsonCredential {
  prepare(request: Request): void {
    request.addHeaders({
      Accept: "application/json",
    });
  }
}

export default SatisfactionCredential;
