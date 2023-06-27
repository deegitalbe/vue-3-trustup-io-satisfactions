<template>
  <div class="flex space-x-2 min-h-[20px]">
    <div
      class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in text-[#dbd1d1] min-h-[20px]"
    >
      <input
        id="toggleSatisfaction"
        v-model="selected"
        type="checkbox"
        name="toggleSatisfaction"
        class="absolute z-[999] block w-5 h-5 rounded-full bg-white appearance-none cursor-pointer checked:right-0 border border-gray-300 min-h-[20px] min-w-[20px]"
        @input="formField.validator.resetValidation"
        @blur="formField.validator.validate"
      />
      <label
        for="toggleSatisfaction"
        class="block h-5 rounded-full cursor-pointer min-h-[20px]"
        :class="getBackground()"
      ></label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Field } from "@henrotaym/vue-3-forms";
import { Reactive } from "@henrotaym/vue-3-forms";

interface Props {
  formField: Reactive<Field>;
}

const props = defineProps<Props>();
const getBackground = () => {
  if (!selected.value) return "bg-red-400";
  if (selected.value) return "bg-green-400";
  return "bg-green-400";
const selected = computed({
  get() {
    return props.formField.value as boolean;
  },
  set(modelValue: boolean) {
    props.formField.setValue(modelValue);
  },
});
</script>
