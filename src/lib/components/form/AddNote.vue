<template>
  <form-container v-if="reasonRequest.isReady()" :form="form">
    <div class="space-y-4">
      <row-with-input :is-centered="true">
        <form-field :form-field="form.fields.ratings">
          <input-rating :form-field="form.fields.ratings"></input-rating>
        </form-field>
      </row-with-input>
      <row-with-input>
        <check-boxes></check-boxes>
      </row-with-input>
      <row-with-input>
        <selectable-input
          v-model="test"
          :reasons="reasonRequest.reasons"
        ></selectable-input>
      </row-with-input>
      <row-with-input>
        <text-area v-model="test" label="note details" />
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
import useRatingsForm from "../../composables/useFormFields";
import { ref } from "vue";

const test = ref("");
const form = useRatingsForm();
const reasonRequest = useReasonRequest();
reasonRequest.fetch({ origin: "worksite" });
</script>
