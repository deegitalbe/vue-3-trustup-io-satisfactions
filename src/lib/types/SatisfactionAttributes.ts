import { Origin } from "../enums/Origin";
import { RelatedToType } from "../enums/RelatedToType";
export interface SatisfactionAttributes {
  data: Data;
}

interface Data {
  id: number;
  value: number;
  origin: Origin;
  text: string;
  is_using: boolean;
  reason: Reason | null;
  created_by_id: number;
  date: string;
  related_to_id: string;
  related_to_type: RelatedToType;
}

interface Reason {
  id: number;
  title: string;
  origin: string;
}
