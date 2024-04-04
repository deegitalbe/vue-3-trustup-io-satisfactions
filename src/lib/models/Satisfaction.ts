import { SatisfactionAttributes } from "../types";
import { Origin } from "../enums/Origin";
import { RelatedToType } from "../enums/RelatedToType";
export default class Satisfaction {
  private _id;
  private _value;
  private _is_using;
  private _origin;
  private _text;
  private _reason;
  private _createdById;
  private _relatedToId;
  private _relatedToType;
  private _date;

  constructor(satisfaction: SatisfactionAttributes) {
    this._id = satisfaction.data.id;
    this._value = satisfaction.data.value;
    this._is_using = satisfaction.data.is_using;
    this._origin = satisfaction.data.origin;
    this._text = satisfaction.data.text;
    this._reason = satisfaction.data.reason?.id || null;
    this._createdById = satisfaction.data.created_by_id;
    this._relatedToId = satisfaction.data.related_to_id;
    this._relatedToType = satisfaction.data.related_to_type;
    this._date = satisfaction.data.date;
  }

  get id() {
    return this._id;
  }

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get isUsing() {
    return this._is_using;
  }

  set isUsing(isUsing: boolean) {
    this._is_using = isUsing;
  }

  get origin() {
    return this._origin;
  }

  set origin(origin: Origin) {
    this._origin = origin;
  }

  get text() {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  get reason() {
    return this._reason;
  }

  set reason(reason: number | null) {
    this._reason = reason;
  }

  get createdBy() {
    return this._createdById;
  }

  set createdBy(createdBy: number) {
    this._createdById = createdBy;
  }

  get relatedToId() {
    return this._relatedToId;
  }

  set relatedToId(relatedToId: string) {
    this._relatedToId = relatedToId;
  }

  get relatedToType() {
    return this._relatedToType;
  }

  set relatedToType(relatedToType: RelatedToType) {
    this._relatedToType = relatedToType;
  }

  get date() {
    return this._date;
  }

  set date(date: string) {
    this._date = date;
  }

  get formatedDate() {
    return Date.parse(this.date);
  }
}
