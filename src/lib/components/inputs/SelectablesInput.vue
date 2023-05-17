<template>
  <select-common
    v-model="selected"
    :selectables="selectables"
    track-by="value"
    title="Reason"
  ></select-common>
</template>
<script lang="ts" setup>
import { useSelectableReason } from "../../composables/useReasonSelectables";
import Reason from "../../models/Reason";
import SelectCommon from "./SelectCommon.vue";
import { computed } from "vue";
const props = defineProps<{
  reasons: Array<Reason>;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "change", selected: string): void;
  (e: "update:modelValue", selected: string): void;
}>();

const { selectables } = useSelectableReason(props.reasons);
const selected = computed({
  get() {
    return props.modelValue;
  },
  set(modelValue: string) {
    emit("update:modelValue", modelValue);
  },
});
</script>
