<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body></body>
  </html>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <div
      class="absolute top-5 right-5 py-1 px-2 bg-[#FF8A00] rounded-md text-white text-xs font-semibold cursor-pointer text-center"
      @click="addNote.open()"
    >
      <i class="fa-solid fa-plus font-s text-2xl" />
    </div>
    <ModalsContainer />

    <NotificationContainer :toasteo="toasteo" />
  </div>
</template>

<script setup lang="ts">
import "./lib";
import useReasonRequest from "./lib/composables/useReasonRequest";
import { NotificationContainer } from "@deegital/vue-trustup-io-toasteo";
import { useToasteo } from "@deegital/vue-trustup-io-toasteo";
import { useAddNote } from "./lib/utils/emitter";
import { ModalsContainer } from "vue-final-modal";

const toasteo = useToasteo();

const reasonRequest = useReasonRequest();
reasonRequest.fetch({ origin: "worksite" });
const reasons = reasonRequest.reasons;
console.log(reasons);
const addNote = useAddNote();
</script>
