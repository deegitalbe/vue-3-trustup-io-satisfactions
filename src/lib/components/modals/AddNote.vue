<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form @success="success" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import AddNote from "@/components/form/AddNote.vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();
const success = () => {
  emit("close");
  useToasteoSuccess();
};
</script>

<style></style>
