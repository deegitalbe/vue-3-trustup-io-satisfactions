<template>
  <div class="flex space-x-2">
    <div
      class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in text-[#dbd1d1]"
    >
      <input
        id="toggle"
        v-model="selected"
        type="checkbox"
        name="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        @input="formField.validator.resetValidation"
        @blur="formField.validator.validate"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-red-400 cursor-pointer"
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

const selected = computed({
  get() {
    return props.formField.value as boolean;
  },
  set(modelValue: boolean) {
    props.formField.setValue(modelValue);
  },
});
</script>
<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}
</style>
