import { ReasonAttributes } from "../api/endpoints/Reason";
import { Origin } from "../enums/Origin";

export default class Reason {
  private _id;
  private _origin;
  private _title;
  constructor(data: ReasonAttributes) {
    this._id = data.id;
    this._origin = data.origin;
    this._title = data.title;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get origin() {
    return this._origin;
  }

  set origin(value: Origin) {
    this._origin = value;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
