<template>
  <div class="w-full">
    <slot></slot>
    <select
      id="status"
      v-model="selected"
      class="border-[#EDEDED] border first-letter:capitalize bg-[#F5F5F5] px-4 py-3 rounded-md font-normal text-xs capitalize w-full"
    >
      <option class="font-normal text-xs capitalize" :value="undefined">
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
const props = defineProps<{
  modelValue: string | undefined;
  trackBy: keyof Selectables;
  title: string;
  selectables: Selectables[];
}>();

const emit = defineEmits<{
  (e: "change", selected: string): void;
  (e: "update:modelValue", selected: string): void;
}>();

const selected = computed({
  get() {
    return props.modelValue as string;
  },
  set(modelValue: string) {
    emit("update:modelValue", modelValue);
  },
});
</script>
