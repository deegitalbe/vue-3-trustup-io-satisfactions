export type Enum<TEnum> = TEnum[keyof TEnum];

const ORIGIN = {
  TOOLS: "tools",
  MARKETPLACE: "marketplace",
} as const;

export type Origin = Enum<typeof ORIGIN>;
export default ORIGIN;
