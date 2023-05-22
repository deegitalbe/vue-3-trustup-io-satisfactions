<template>
  <form-container v-if="reasonRequest.isReady()" :form="form">
    <div class="space-y-4">
      <row-with-input
        v-if="form.fields.isUsing.value === true"
        :is-centered="true"
      >
        <form-field :form-field="form.fields.ratings" class="items-center">
          <input-rating :form-field="form.fields.ratings"></input-rating>
        </form-field>
      </row-with-input>
      <row-with-input>
        <form-field :form-field="form.fields.isUsing">
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
        <form-field :form-field="form.fields.noteDetails">
          <text-area
            label="note details"
            :form-field="form.fields.noteDetails"
          />
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
import useReasonRequest from "../../composables/useReasonRequest";
import SelectableInput from "../inputs/SelectablesInput.vue";
import FormContainer from "./FormContainer.vue";
import FormField from "./FormField.vue";
import useUpdateRatingsForm from "../../composables/useUpdateRatingsForm ";
import Satisfaction from "../../types/Satisfaction";

export type InitialField = {
  origin: string;
  created_by_id: number;
  related_to_id: string;
  related_to_type: string;
};
interface Props {
  model: Satisfaction;
}
const props = defineProps<Props>();

const form = useUpdateRatingsForm(props.model);
const reasonRequest = useReasonRequest();
reasonRequest.fetch({ origin: "worksite" });
</script>
