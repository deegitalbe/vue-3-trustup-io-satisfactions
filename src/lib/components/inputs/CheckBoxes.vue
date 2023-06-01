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
        class="absolute block w-5 h-5 rounded-full bg-white appearance-none cursor-pointer checked:right-0 border border-gray-300"
        @input="formField.validator.resetValidation"
        @blur="formField.validator.validate"
      />
      <label
        for="toggle"
        class="block overflow-hidden h-5 rounded-full cursor-pointer"
        :class="{ 'bg-green-400': selected, 'bg-red-400': !selected }"
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
