export interface Satisfaction {
  data: Data;
}

export interface Data {
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

export interface Reason {
  id: number;
  title: string;
  origin: string;
}

export default Satisfaction;
