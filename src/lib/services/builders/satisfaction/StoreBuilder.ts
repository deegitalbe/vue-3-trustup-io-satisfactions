// import { Field, Fields, Form, useReactiveForm, Reactive } from '@henrotaym/vue-3-forms';
import { Reactive } from "@henrotaym/vue-3-forms";
import { RatingFields } from "../../../composables/useRatingsForm";
export default class CreateBuilder {
  private _dirtyFields;
  private _data;
  constructor(dirtyFields: Reactive<Partial<RatingFields>>) {
    this._dirtyFields = dirtyFields;
    this._data = {};
  }

  setDirtyFieldsValueAsData() {
    this._dirtyFields;
  }

  setRatings() {
    // this._dirtyFields
    console.log("ratings");
  }

  setNoteDetails() {
    console.log("noteDetails");
  }

  setIsUsing() {
    console.log("isUsing");
  }
}
