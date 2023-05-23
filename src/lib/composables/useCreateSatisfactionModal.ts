import { Origin } from "../enums";
import { useComponentModal } from "../utils/emitter";
import { Satisfaction } from "../types";
import { Field, Form } from "@henrotaym/vue-3-forms";
import Joi from "joi";
import UpdateNoteModalVue from "../components/modals/UpdateNoteModal.vue";
import CreateNoteModalVue from "../components/modals/CreateNoteModal.vue";

export type SatisfactionFields = {
  value: Field<number | undefined>;
  isUsing: Field<boolean>;
  origin: Field<Origin>;
};

type OnSuccess = (satisfaction: Satisfaction) => void;
type OnSubmit = (form: Form<SatisfactionFields>) => Promise<Satisfaction>;

export class SatisfactionFormBuilder {
  private _value?: number = 2;
  private _is_using = true;
  private _origin!: Origin;
  private _onSubmit!: OnSubmit;
  private _onSuccess?: OnSuccess;

  public onSuccess(onSuccess: OnSuccess) {
    this._onSuccess = onSuccess;
  }

  public setModel(satisfaction: Satisfaction) {
    this.setIsUsing(satisfaction.data.is_using)
      .setValue(satisfaction.data.value)
      .setOrigin(satisfaction.data.origin as Origin);
  }

  public setOrigin(origin: Origin) {
    this._origin = origin;
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

    const form = new Form({ value, isUsing, origin });
    form.onSubmit(async (form) => {
      const satisfaction = await this._onSubmit(form);
      if (this._onSuccess) await this._onSuccess?.(satisfaction);
    });

    return form;
  }
}

// class CreateSatisfactionFormBuilderFactory {
//   public create(attributes: { origin: Origin }) {
//     const builder = new SatisfactionFormBuilder();

//     return builder.setOrigin(attributes.origin);
//   }
// }

export const useCreateSatisfaction = ({ origin }: { origin: Origin }) => {
  const builder = new SatisfactionFormBuilder().setOrigin(origin);
  builder.onSubmit(async () => ({} as Satisfaction));

  const { open, close } = useComponentModal(CreateNoteModalVue, { builder });
  return { open, close, onSuccess: builder.onSuccess };
};

export const useEditSatisfaction = (uuid: string) => {
  const builder = new SatisfactionFormBuilder();

  const { open, close } = useComponentModal(UpdateNoteModalVue, {
    builder,
    uuid,
  });

  builder.onSubmit(async () => {
    // appel api
    // si success
    close();
    return {} as Satisfaction;
  });

  return { open, close, onSuccess: builder.onSuccess };
};

// const { open, close, onSuccess } = useCreateSatisfaction({
//   origin: Origin.MARKETPLACE,
// });

// onSuccess((satisfaction) => {
//   console.log("dsfsdf", satisfaction);
// });

// open();
// close();

// USAGE
const { close, open, onSuccess } = useEditSatisfaction("sdlfkfjsdlkf");

onSuccess(async (satisfaction) => {
  console.log("dsfsdf", satisfaction);
});

// open();
// close();
