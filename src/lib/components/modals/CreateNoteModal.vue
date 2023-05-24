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
import SatisfactionForm from "../form/SatisfactionForm.vue";
// import { notify } from "../../composables";
import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import { reactive } from "vue";

// const emit = defineEmits<{
//   (e: "close"): void;
// }>();

interface Props {
  builder: SatisfactionFormBuilder;
}
const props = defineProps<Props>();

const form = reactive(props.builder.build());
console.log(form);

// const close = () => {
//   emit("close");
//   notify.useToasteoSuccess();
// };
</script>

<style></style>
