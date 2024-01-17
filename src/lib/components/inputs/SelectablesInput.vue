<template>
  <select-common
    v-model="selected"
    :selectables="selectables"
    track-by="id"
    :title="`${$t(
      'trustup-io-satisfaction-plugin.app.satisfaction.form.select.reason'
    )}`"
    :form-field="formField"
    @blur="formField.validator.validate"
  ></select-common>
</template>
<script lang="ts" setup>
import Reason from "../../models/Reason";
import SelectCommon from "./SelectCommon.vue";
import { computed } from "vue";
import { Reactive, Field } from "@henrotaym/vue-3-forms";
import { useSelectableReason } from "../../composables";
const props = defineProps<{
  reasons: Array<Reason>;
  formField: Reactive<Field<string | number | null>>;
}>();

const { selectables } = useSelectableReason(props.reasons);
const selected = computed({
  get() {
    return props.formField.value;
  },
  set(modelValue: number | string | null) {
    props.formField.setValue(modelValue);
  },
});
</script>
