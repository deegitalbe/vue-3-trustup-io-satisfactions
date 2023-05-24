import { Field, Form, useReactiveForm } from "@henrotaym/vue-3-forms";
import Joi from "joi";
import { Origin } from "../../../enums";
import Satisfaction from "../../../models/Satisfaction";
import { SatisfactionFields } from "../../../types/FormFields";

type OnSuccess = (satisfaction: Satisfaction) => void;
type OnSubmit = (form: Form<SatisfactionFields>) => Promise<Satisfaction>;

export class SatisfactionFormBuilder {
  private _value?: number = 2;
  private _is_using = true;
  private _origin!: Origin;
  private _onSubmit!: OnSubmit;
  private _onSuccess?: OnSuccess;
  private _text = "";
  private _reason: number | null = null;
  private _createdById!: number;
  private _relatedToId!: string;
  private _relatedToType!: string;

  public onSuccess(onSuccess: OnSuccess) {
    this._onSuccess = onSuccess;
  }

  public setModel(satisfaction: Satisfaction) {
    console.log(satisfaction);
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

  public setRelatedToType(relatedToType: string) {
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
      label: "Value",
      value: this._value,
      validation: Joi.number().min(1).max(5),
    });

    const isUsing = new Field({
      label: "Using app",
      value: this._is_using,
      validation: Joi.boolean().required(),
    });

    const origin = new Field({
      label: "Origin",
      value: this._origin,
      validation: Joi.string()
        .valid(Origin.MARKETPLACE, Origin.WORKSITE)
        .required(),
    }) as Field<Origin>;

    const text = new Field({
      label: "Text",
      value: this._text,
      validation: Joi.string().required(),
    });

    const reason = new Field({
      label: "Reason",
      value: this._reason,
      validation: Joi.number()
        .required()
        .messages({ "number.required": "You must select a reason" }),
    });

    const createdById = new Field({
      label: "created_by_id",
      value: this._createdById,
      validation: Joi.number(),
    });

    const relatedToId = new Field({
      label: "related_to_id",
      value: this._relatedToId,
      validation: Joi.string(),
    });

    const relatedToType = new Field({
      label: "related_to_type",
      value: this._relatedToType,
      validation: Joi.string(),
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
      if (this._onSuccess) await this._onSuccess?.(satisfaction);
    });

    return form;
  }
}

export default SatisfactionFormBuilder;
