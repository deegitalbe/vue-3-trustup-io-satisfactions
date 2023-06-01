<template>
  <div>
    <ratings-module v-model="ratingValue" class="text-4xl text-gr"
      ><i class="fa-duotone fa-star"></i
    ></ratings-module>
  </div>
</template>
<script setup lang="ts">
import RatingsModule from "../ratings/RatingsModule.vue";
import { computed } from "vue";
import { Field } from "@henrotaym/vue-3-forms";
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
    console.log(modelValue);
    props.formField.setValue(modelValue);
  },
});
// const getCurrentColor = () => {
//   switch (ratingValue.value) {
//     case 1 || 2:
//       return "text-red-500";
//     case 3:
//       return "text-orange-500";
//     case 4 || 5:
//       return "text-green-500";
//     default:
//       return "text-gray-200";
//   }
// };
</script>
