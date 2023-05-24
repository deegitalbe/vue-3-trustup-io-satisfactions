import { JsonCredential, Request } from "@henrotaym/api-client";

class ReasonCredential extends JsonCredential {
  // TODO VERIFY IF I CAN FETCH
  prepare(request: Request): void {
    request.addHeaders({
      Accept: "application/json",
    });
  }
}

export default ReasonCredential;
