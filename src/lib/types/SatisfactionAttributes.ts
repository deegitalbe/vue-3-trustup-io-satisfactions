export interface SatisfactionAttributes {
  data: Data;
}

interface Data {
  id: number;
  value: number;
  origin: string;
  text: string;
  is_using: boolean;
  reason: Reason;
  created_by_id: number;
  date: string;
  related_to_id: string;
  related_to_type: string;
}

interface Reason {
  id: number;
  title: string;
  origin: string;
}
