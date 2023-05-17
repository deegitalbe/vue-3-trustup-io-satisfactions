<template>
  <div>
    <star-rating
      v-model:rating="ratingValue"
      star-size="30"
      :rounded-corners="true"
      :animate="true"
      :show-rating="false"
      :active-color="['red', 'red', 'orange', 'green', 'green']"
    ></star-rating>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Field } from "@henrotaym/vue-3-forms";
import StarRating from "vue-star-rating";
import { Reactive } from "@henrotaym/vue-3-forms";

interface Props {
  formField: Reactive<Field>;
}

const props = defineProps<Props>();

const ratingValue = computed({
  get() {
    return props.formField.value as number;
  },
  set(modelValue: number) {
    props.formField.setValue(modelValue);
  },
});
</script>
