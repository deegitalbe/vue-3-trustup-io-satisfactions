<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form v-if="service.isReady()" :form="service.form" />
    <h1 v-else>LOOOOOOOOAAAAAADDDD</h1>
    <!-- <update-note :model="model" @success="success" /> -->
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import SatisfactionForm from "../form/SatisfactionForm.vue";
import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
// import { notify } from "../../composables";
import useSatisfactionShowService from "../../composables/useSatisfactionShowService";

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
const service = useSatisfactionShowService(props.builder);

service.fetch(Number(props.uuid));
console.log(service.builder, service.form);
</script>

<style></style>
