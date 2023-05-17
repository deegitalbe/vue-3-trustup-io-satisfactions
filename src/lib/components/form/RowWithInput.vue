<template>
  <div
    class="items-center flex font-normal text-sm space-x-4"
    :class="props.isCentered ? 'justify-center' : 'justify-between'"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { boolean } from "zod";

const props = defineProps({
  isCentered: boolean,
});
</script>
