<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form :form="form" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import AddNote from "../form/AddNote.vue";
import { notify } from "../../composables";
import { InitialField } from "../form/AddNote.vue";
import Satisfaction from "../../types/Satisfaction";
import { SatisfactionFormBuilder } from "../../composables/useCreateSatisfactionModal";

const emit = defineEmits<{
  (e: "close"): void;
}>();

interface Props {
  builder: SatisfactionFormBuilder;
}
const props = defineProps<Props>();

const form = props.builder.build();

const close = () => {
  emit("close");
  notify.useToasteoSuccess();
};
</script>

<style></style>
