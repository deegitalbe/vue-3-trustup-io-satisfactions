<template>
  <div class="w-full space-y-1">
    <textarea
      :id="trimLabel"
      v-model="input"
      :name="trimLabel"
      class="border-[#EDEDED] border-[1px] rounded-[10px] px-4 py-3 w-full resize-none"
      rows="8"
      cols="60"
      @input="formField.validator.resetValidation"
      @blur="formField.validator.validate"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Reactive, Field } from "@henrotaym/vue-3-forms";

const props = defineProps<{
  label: string;
  formField: Reactive<Field>;
}>();

const input = computed({
  get() {
    return props.formField.value as string;
  },
  set(modelValue: string) {
    props.formField.setValue(modelValue);
  },
});

const trimLabel = () => {
  return props.label.replace(/ /g, "");
};
</script>
