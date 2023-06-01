<template>
  <CenteredModal class="min-h-[800px]">
    <satisfaction-form :form="form" />
  </CenteredModal>
</template>

<script setup lang="ts">
import SatisfactionForm from "../form/SatisfactionForm.vue";
import { CenteredModal } from "@deegital/vue3-trustup-io-vue-final-modal";

import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import { reactive } from "vue";

interface Props {
  builder: SatisfactionFormBuilder;
}
const props = defineProps<Props>();

const form = reactive(props.builder.build());
</script>

<style></style>
