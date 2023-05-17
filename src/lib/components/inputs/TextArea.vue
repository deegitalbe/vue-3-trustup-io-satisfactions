<template>
  <div class="w-full space-y-1">
    <label
      :for="trimLabel"
      class="text-gray-500 first-letter:capitalize capitalize whitespace-nowrap"
      >{{ label }}</label
    >
    <textarea
      :id="trimLabel"
      v-model="input"
      :name="trimLabel"
      class="border-[#EDEDED] border-[1px] rounded-[10px] px-4 py-3 w-full"
      rows="8"
      cols="60"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", input: string): void;
}>();

const input = computed({
  get() {
    if (!props.modelValue) return "";
    return props.modelValue;
  },
  set(modelValue: string) {
    emit("update:modelValue", modelValue);
  },
});

const trimLabel = () => {
  return props.label.replace(/ /g, "");
};
</script>
