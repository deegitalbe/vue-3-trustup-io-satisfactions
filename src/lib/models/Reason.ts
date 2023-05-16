import { ReasonAttributes } from "../api/endpoints/Reason";

export class Reason {
  private _id;
  private _origin;
  private _title;
  constructor(data: ReasonAttributes) {
    this._id = data.id;
    this._origin = data.origin;
    this._title = data.title;
  }

  get id() {
    return this._id;
  }

  get origin() {
    return this._origin;
  }

  get title() {
    return this._title;
  }
}
