<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form :form="form" />
    <!-- <update-note :model="model" @success="success" /> -->
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
// import UpdateNote from "../form/UpdateNote.vue";
// import { notify } from "../../composables";
// import Satisfaction from "../../types/Satisfaction";
import { SatisfactionFormBuilder } from "../../composables/useCreateSatisfactionModal";
import { Satisfaction } from "../../types";

// const emit = defineEmits<{
//   (e: "close"): void;
// }>();

interface Props {
  builder: SatisfactionFormBuilder;
  uuid: string;
}
const props = defineProps<Props>();

// use service and endpoint to get satisfaction from received uuid (display a loader while loading)
// use model to customize builder
const satisfaction = {} as Satisfaction;
props.builder.setModel(satisfaction);
const form = props.builder.build();

// const success = () => {
//   emit("close");
//   notify.useToasteoSuccess();
// };
</script>

<style></style>
