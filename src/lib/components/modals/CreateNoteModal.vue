<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <add-note :data="data" :service="service" :model="model" @close="close" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import AddNote from "../form/AddNote.vue";
import { notify } from "../../composables";
import { InitialField } from "../form/AddNote.vue";
import StoreService from "../../services/factories/satisfaction/StoreService";
import Satisfaction from "../../types/Satisfaction";

const emit = defineEmits<{
  (e: "close"): void;
}>();

interface Props {
  data: InitialField;
  service: StoreService;
  model?: Satisfaction;
}
defineProps<Props>();
const close = () => {
  emit("close");
  notify.useToasteoSuccess();
};
</script>

<style></style>
