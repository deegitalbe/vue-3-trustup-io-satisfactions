<template>
  <CenteredModal>
    <satisfaction-form :form="form" :is-edit="false" />
  </CenteredModal>
</template>

<script setup lang="ts">
// TODO
import SatisfactionForm from "../form/SatisfactionForm.vue";

import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import { reactive } from "vue";
import { CenteredModal } from "@henrotaymcorp/vue-modal";

interface Props {
  builder: SatisfactionFormBuilder;
}
const props = defineProps<Props>();

const form = reactive(props.builder.build());
</script>

<style></style>
