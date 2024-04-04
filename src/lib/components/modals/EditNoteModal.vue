<template>
  <CenteredModal>
    <AppLoader
      v-if="!satisfactionEditService.form.fields.origin.value"
      :is-full-page="false"
      first-circle-color="#5980e3"
      second-circle-color="#a6baed"
      third-circle-color="#1B4CCA"
    />
    <satisfaction-form
      v-else
      :form="satisfactionEditService.form"
      :is-edit="true"
      :is-marketplace="isMarketplace"
    />
  </CenteredModal>
</template>

<script setup lang="ts">
// TODO
import { CenteredModal } from "@henrotaymcorp/vue-modal";
import { AppLoader } from "@deegital/vue-3-trustup-io-loader";
import SatisfactionForm from "../form/SatisfactionForm.vue";
import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import useSatisfactionEditService from "../../composables/useSatisfactionEditService";

interface Props {
  builder: SatisfactionFormBuilder;
  uuid: string;
  isMarketplace: boolean;
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
