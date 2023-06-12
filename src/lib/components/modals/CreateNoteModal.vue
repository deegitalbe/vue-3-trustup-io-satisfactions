<template>
  <VueFinalModal
    class="flex justify-center items-center"
    :content-class="`p-11 bg-white bg-red[500] rounded-lg min-h-[37.5rem] min-w-[34.5rem] inline-block space-x-2`"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <satisfaction-form :form="form" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import SatisfactionForm from "../form/SatisfactionForm.vue";
import { VueFinalModal } from "vue-final-modal";

import SatisfactionFormBuilder from "../../builders/satisfaction/form/SatisfactionFormBuilder";
import { reactive } from "vue";

interface Props {
  builder: SatisfactionFormBuilder;
}
const props = defineProps<Props>();

const form = reactive(props.builder.build());
</script>

<style></style>
