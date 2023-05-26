<script setup lang="ts">
import { Field } from "@henrotaym/vue-3-forms";
import { Reactive } from "@henrotaym/vue-3-forms";

interface Props {
  formField: Reactive<Field>;
}

defineProps<Props>();
</script>

<template>
  <fieldset class="flex flex-col gap-2 w-full">
    <label class="text-sm text-gray-600 block capitalize" for="">{{
      formField.label
    }}</label>
    <slot></slot>
    <div v-if="formField.validator.hasError" class="text-red-600 text-sm">
      {{ formField.validator.error }}
    </div>
  </fieldset>
</template>
