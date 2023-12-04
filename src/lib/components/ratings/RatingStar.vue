<template>
  <div class="cursor-pointer">
    <i
      class="fa-solid fa-star text-2xl"
      :class="setStarColor()"
      @click="emit('update:modelValue', index)"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  modelValue?: number;
  index: number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 1,
  starColor: "#ff9800",
  inactiveColor: "#c0c0c0",
  starSize: "32",
  controlBg: "#2e5090",
});

const index = ref(props.index);
index.value = index.value + 1;
const emit = defineEmits<{
  (e: "update:modelValue", index: number): void;
}>();

const setStarColor = () => {
  if (props.modelValue <= 3 && index.value <= props.modelValue)
    return "text-red-600 text-2xl";
  if (!props.modelValue || index.value > props.modelValue)
    return "text-gray-400 text-2xl";
  if (index.value <= props.modelValue) return "text-green-600";
};
</script>

<style scoped></style>
