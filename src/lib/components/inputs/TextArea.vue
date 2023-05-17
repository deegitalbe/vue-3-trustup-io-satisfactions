<template>
  <div class="w-full space-y-1">
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
import { Reactive, Field } from "@henrotaym/vue-3-forms";

const props = defineProps<{
  label: string;
  formField: Reactive<Field>;
}>();

const input = computed({
  get() {
    console.log(props.formField.value);
    return props.formField.value as string;
  },
  set(modelValue: string) {
    console.log(props.formField.value);

    props.formField.setValue(modelValue);
  },
});

const trimLabel = () => {
  return props.label.replace(/ /g, "");
};
</script>
