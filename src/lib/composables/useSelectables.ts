import { useTranslation } from "@deegital/vue-3-trustup-io-translations";
type Selectable = { id: string; label: string; value: unknown };
export interface Selectables {
  id: string;
  label: string;
  value: string;
}

const useSelectable = <TRawSelectable, TSelectable extends Selectable>(
  selectables: TRawSelectable[],
  transformer: (element: TRawSelectable, index: number) => TSelectable
) => selectables.map(transformer);

const useCustomSelectableEnum = <
  TEnum extends object,
  TEnumKey extends keyof TEnum,
  TSelectable extends Selectable
>(
  enumValue: TEnum,
  transformer: (enumValue: TEnum[TEnumKey], key: TEnumKey) => TSelectable
) => {
  const keys = Object.keys(enumValue) as TEnumKey[];
  return keys.map((key) => transformer(enumValue[key], key));
};

const useSelectableEnum = <TEnum extends object>(
  enumValue: TEnum,
  translationLocation?: string
) => {
  const { t } = useTranslation();
  return useCustomSelectableEnum(enumValue, (val, key) => ({
    id: key.toString(),
    value: val,
    label: t(`${translationLocation}.${key.toString()}`),
  }));
};

export default { useSelectable, useSelectableEnum, useCustomSelectableEnum };
