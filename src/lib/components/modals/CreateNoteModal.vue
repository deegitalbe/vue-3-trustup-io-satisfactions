<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <add-note :data="data" @success="success" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import AddNote from "../form/AddNote.vue";
import { notify } from "../../composables";
import { InitialField } from "../form/AddNote.vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

interface Props {
  data: InitialField;
}
defineProps<Props>();
const success = () => {
  emit("close");
  notify.useToasteoSuccess();
};
</script>

<style></style>
