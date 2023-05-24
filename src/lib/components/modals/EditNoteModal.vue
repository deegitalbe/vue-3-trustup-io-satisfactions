<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form
      v-if="satisfactionEditService.service.isReady()"
      :form="satisfactionEditService.form"
    />
    <AppLoader
      v-else
      :is-full-page="false"
      first-circle-color="#5980e3"
      second-circle-color="#a6baed"
      third-circle-color="#1B4CCA"
    />
    <!-- <update-note :model="model" @success="success" /> -->
  </VueFinalModal>
</template>

<script setup lang="ts">
import { AppLoader } from "@deegital/vue-3-trustup-io-loader";

import { VueFinalModal } from "vue-final-modal";
import SatisfactionForm from "../form/SatisfactionForm.vue";
import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import useSatisfactionEditService from "../../composables/useSatisfactionEditService";

interface Props {
  builder: SatisfactionFormBuilder;
  uuid: string;
}
const props = defineProps<Props>();

const satisfactionEditService = useSatisfactionEditService(
  props.builder,
  props.uuid
);
const init = async () => {
  await satisfactionEditService.setForm();
};

init();
</script>

<style></style>
