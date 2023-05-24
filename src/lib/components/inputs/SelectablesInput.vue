<template>
  <select-common
    v-model="selected"
    :selectables="selectables"
    track-by="id"
    title="Select a reason"
    :form-field="formField"
    @blur="formField.validator.validate"
  ></select-common>
</template>
<script lang="ts" setup>
import Reason from "../../models/Reason";
import SelectCommon from "./SelectCommon.vue";
import { computed } from "vue";
import { Reactive, Field } from "@henrotaym/vue-3-forms";
import { useSelectableReason } from "../../composables/useSelectableReason";

const props = defineProps<{
  reasons: Array<Reason>;
  formField: Reactive<Field>;
}>();

const { selectables } = useSelectableReason(props.reasons);
const selected = computed({
  get() {
    return props.formField.value as number;
  },
  set(modelValue: number) {
    props.formField.setValue(modelValue);
  },
});
</script>
