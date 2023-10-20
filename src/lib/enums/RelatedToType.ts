import { Enum } from "./Origin";
const RELATED_TO_TYPE = {
  PRO: "professional",
  TENANT: "tenant",
} as const;

export type RelatedToType = Enum<typeof RELATED_TO_TYPE>;
export default RELATED_TO_TYPE;
