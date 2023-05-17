<template>
  <div class="w-full">
    <slot></slot>
    <select
      id="status"
      v-model="selected"
      class="border-[#EDEDED] border first-letter:capitalize bg-[#F5F5F5] px-4 py-3 rounded-md font-normal text-xs capitalize w-full"
      @input="formField.validator.resetValidation"
      @blur="formField.validator.validate"
    >
      <option class="font-normal text-xs capitalize" :value="null">
        {{ title }}
      </option>
      <option
        v-for="selectable in selectables"
        :key="selectable[trackBy]"
        :value="selectable[trackBy]"
        class="capitalize"
      >
        {{ selectable.label }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Selectables } from "../../composables/useSelectables";
import { Reactive, Field } from "@henrotaym/vue-3-forms";
const props = defineProps<{
  modelValue: number | undefined;
  trackBy: keyof Selectables;
  title: string;
  selectables: Selectables[];
  formField: Reactive<Field>;
}>();

const emit = defineEmits<{
  (e: "change", selected: number): void;
  (e: "update:modelValue", selected: number): void;
}>();

const selected = computed({
  get() {
    return props.modelValue as number;
  },
  set(modelValue: number) {
    emit("update:modelValue", modelValue);
  },
});
</script>
