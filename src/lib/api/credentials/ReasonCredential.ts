import { JsonCredential, Request } from "@henrotaym/api-client";

class ReasonCredential extends JsonCredential {
  // TODO VERIFY IF I CAN FETCH
  prepare(request: Request): void {
    request
      .addHeaders({
        Accept: "application/json",
      })
      .setBaseUrl(import.meta.env.VITE_SATISFACTION_URL)
      .appendToBaseUrl("api/reasons");
  }
}

export default ReasonCredential;
