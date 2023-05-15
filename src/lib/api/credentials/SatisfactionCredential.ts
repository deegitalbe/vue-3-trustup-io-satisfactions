import { JsonCredential, Request } from "@henrotaym/api-client";

class SatisfactionCredential extends JsonCredential {
  // TODO VERIFY IF I CAN FETCH
  prepare(request: Request): void {
    request
      .addHeaders({
        Accept: "application/json",
      })
      .setBaseUrl(import.meta.env.VITE_SATISFACTION_URL)
      .appendToBaseUrl("api/notes");
  }
}

export default SatisfactionCredential;
