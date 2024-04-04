import { Field, Form, useReactiveForm } from "@henrotaym/vue-3-forms";
import Satisfaction from "../../../models/Satisfaction";
import { SatisfactionFields } from "../../../types";
import { z } from "zod";
import { Origin } from "../../../enums/Origin";
import ORIGIN from "../../../enums/Origin";
import { RelatedToType } from "../../../enums/RelatedToType";
import {
  useToasteoSuccess,
  useToasteoError,
} from "../../../composables/useToasteoNotification";
import { useTranslate } from "@deegital/vue-3-trustup-io-translations";
export type OnSuccess = (satisfaction: Satisfaction) => void;
export type OnSubmit = (
  form: Form<SatisfactionFields>
) => Promise<Satisfaction | undefined | null>;

export class SatisfactionFormBuilder {
  private _value?: number = 2;
  private _is_using = true;
  private _origin!: Origin;
  private _onSubmit!: OnSubmit;
  private _onSuccess!: OnSuccess;
  private _text = "";
  private _reason: number | null = null;
  private _createdById!: number;
  private _relatedToId!: string;
  private _relatedToType!: RelatedToType;

  public onSuccess(onSuccess: OnSuccess) {
    // const onSuccessman: OnSuccess = (satisfaction) => {
    //   onSuccessCallback(satisfaction);
    //   useToasteoSuccess("dfhkjsdhfh");
    // };
    this._onSuccess = onSuccess;
  }

  public setModel(satisfaction: Satisfaction) {
    this.setIsUsing(satisfaction.isUsing)
      .setValue(satisfaction.value)
      .setOrigin(satisfaction.origin)
      .setText(satisfaction.text)
      .setReason(satisfaction.reason)
      .setCreatedById(satisfaction.createdBy)
      .setRelatedToId(satisfaction.relatedToId)
      .setRelatedToType(satisfaction.relatedToType);
  }

  public setOrigin(origin: Origin) {
    this._origin = origin;
    return this;
  }

  public setText(text: string) {
    this._text = text;
    return this;
  }

  public setReason(reason: number | null) {
    this._reason = reason;
    return this;
  }

  public onSubmit(onSubmit: OnSubmit) {
    this._onSubmit = onSubmit;
    return this;
  }

  public setValue(value?: number) {
    this._value = value;
    return this;
  }

  public setCreatedById(createdById: number) {
    this._createdById = createdById;
    return this;
  }

  public setRelatedToType(relatedToType: RelatedToType) {
    this._relatedToType = relatedToType;
    return this;
  }
  public setRelatedToId(relatedToId: string) {
    this._relatedToId = relatedToId;
    return this;
  }

  public setIsUsing(isUsing: boolean) {
    this._is_using = isUsing;
    return this;
  }
  public build() {
    const value = new Field({
      label: useTranslate(
        "trustup-io-satisfaction-plugin.app.satisfaction.form.fields.value"
      ),
      value: this._value,
      validation: z.number(),
    });

    const isUsing = new Field({
      label: useTranslate(
        "trustup-io-satisfaction-plugin.app.satisfaction.form.fields.is_using"
      ),
      value: this._is_using,
      validation: z.boolean(),
    });

    const origin = new Field({
      label: useTranslate(
        "trustup-io-satisfaction-plugin.app.satisfaction.form.fields.origin"
      ),
      value: this._origin,
      validation: z.nativeEnum(ORIGIN),
    });

    const text = new Field({
      label: useTranslate(
        "trustup-io-satisfaction-plugin.app.satisfaction.form.fields.text"
      ),
      value: this._text,
      validation: z.string(),
    });

    const reason = new Field({
      label: useTranslate(
        "trustup-io-satisfaction-plugin.app.satisfaction.form.fields.reason"
      ),
      value: this._reason,
      validation: z.number().nullable(),
    });

    const createdById = new Field({
      label: "created_by_id",
      value: this._createdById,
      validation: z.number(),
    });

    const relatedToId = new Field({
      label: "related_to_id",
      value: this._relatedToId,
      validation: z.string(),
    });

    const relatedToType = new Field({
      label: "related_to_type",
      value: this._relatedToType,
      validation: z.string(),
    });

    const form = useReactiveForm({
      value,
      isUsing,
      origin,
      reason,
      text,
      createdById,
      relatedToId,
      relatedToType,
    });

    form.onSubmit(async (form) => {
      const satisfaction = await this._onSubmit(form);
      if (!satisfaction) {
        useToasteoError();
        return;
      }
      useToasteoSuccess();
      form.clear();
      if (this._onSuccess) await this._onSuccess?.(satisfaction);
    });

    return form;
  }
}

export default SatisfactionFormBuilder;
