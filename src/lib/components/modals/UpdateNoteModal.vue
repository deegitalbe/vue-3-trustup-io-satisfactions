<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <update-note :model="model" @success="success" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import UpdateNote from "../form/UpdateNote.vue";
import { notify } from "../../composables";
import Satisfaction from "../../types/Satisfaction";

const emit = defineEmits<{
  (e: "close"): void;
}>();

interface Props {
  model: Satisfaction;
}
defineProps<Props>();
const success = () => {
  emit("close");
  notify.useToasteoSuccess();
};
</script>

<style></style>
