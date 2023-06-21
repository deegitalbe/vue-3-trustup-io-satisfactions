<template>
  <div class="flex">
    <rating-star
      v-for="(star, index) in numberOfStars"
      :key="index"
      v-model="ratingValue"
      :index="index"
    >
    </rating-star>
  </div>
</template>
<script setup lang="ts">
import RatingStar from "../ratings/RatingStar.vue";
import { computed } from "vue";
import { Field } from "@henrotaym/vue-3-forms";
import { Reactive } from "@henrotaym/vue-3-forms";
interface Props {
  formField: Reactive<Field>;
  numberOfStars: 5;
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
