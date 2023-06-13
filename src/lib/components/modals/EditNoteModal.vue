<template>
  <VueFinalModal
    modal-id="editNote"
    class="flex justify-center items-center"
    :content-class="`p-11 bg-white bg-red[500] rounded-lg min-h-[37.5rem] min-w-[34.5rem] inline-block space-x-2`"
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
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

import { AppLoader } from "@deegital/vue-3-trustup-io-loader";

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
