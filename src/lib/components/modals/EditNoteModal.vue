<template>
  <CenteredModal>
    <satisfaction-form
      v-if="satisfactionEditService.service.isReady()"
      :form="satisfactionEditService.form"
    />
    <template v-else>
      <div>{{ $t("worksite-admin.sidebar.clients") }}</div>
      <AppLoader
        :is-full-page="false"
        first-circle-color="#5980e3"
        second-circle-color="#a6baed"
        third-circle-color="#1B4CCA"
      />
    </template>
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
}
console.log("EditNoteModal triggered");
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
