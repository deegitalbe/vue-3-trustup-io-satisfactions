<template>
  <form-container v-if="reasonRequest.isReady()" :form="form" :is-edit="isEdit">
    <div class="space-y-4">
      <row-with-input :is-centered="true">
        <form-field :form-field="form.fields.value" class="items-center">
          <input-rating
            :form-field="form.fields.value"
            :number-of-stars="5"
          ></input-rating>
        </form-field>
      </row-with-input>
      <row-with-input>
        <form-field v-if="!isMarketplace" :form-field="form.fields.isUsing">
          <check-boxes :form-field="form.fields.isUsing"></check-boxes>
        </form-field>
      </row-with-input>
      <row-with-input>
        <form-field :form-field="form.fields.reason">
          <selectable-input
            :form-field="form.fields.reason"
            :reasons="reasonRequest.reasons"
          ></selectable-input
        ></form-field>
      </row-with-input>
      <row-with-input>
        <form-field :form-field="form.fields.text">
          <text-area label="note details" :form-field="form.fields.text" />
        </form-field>
      </row-with-input>
    </div>
  </form-container>
</template>
<script lang="ts" setup>
import InputRating from "../inputs/InputRating.vue";
import TextArea from "../inputs/TextArea.vue";
import RowWithInput from "./RowWithInput.vue";
import CheckBoxes from "../inputs/CheckBoxes.vue";
import SelectableInput from "../inputs/SelectablesInput.vue";
import FormContainer from "./FormContainer.vue";
import FormField from "./FormField.vue";
import { Form, Reactive } from "@henrotaym/vue-3-forms";
import { SatisfactionFields } from "../../types";
import useReasonIndexService from "../../composables/useReasonIndexService";

interface Props {
  form: Reactive<Form<SatisfactionFields>>;
  isEdit: boolean;
  isMarketplace: boolean;
}
// TODO FIX FORM FIELD TYPING
const props = defineProps<Props>();

const reasonRequest = useReasonIndexService();
reasonRequest.fetch({ origin: props.form.fields.origin.value });
</script>
