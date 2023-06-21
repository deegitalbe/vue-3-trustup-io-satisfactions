<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <div
      class="absolute top-5 right-5 py-1 px-2 bg-[#FF8A00] rounded-md text-white text-xs font-semibold cursor-pointer text-center"
      @click="open()"
    >
      CLICK ME
      <i class="fa-solid fa-plus font-s text-2xl" />
    </div>

    <!-- <div
      class="absolute top-5 right-20 py-1 px-2 bg-[blue] rounded-md text-white text-xs font-semibold cursor-pointer text-center"
      @click="updateNoteModal.open()"
    >
      <i class="fa-solid fa-plus font-s text-2xl" />
    </div> -->
    <ModalsContainer />

    <NotificationContainer :toasteo="toasteo" />
  </div>
</template>

<script setup lang="ts">
import { NotificationContainer } from "@deegital/vue-trustup-io-toasteo";
import { useToasteo } from "@deegital/vue-trustup-io-toasteo";
import { useEditSatisfaction } from "./lib/composables";
import { ModalsContainer } from "@henrotaymcorp/vue-modal";
import "@henrotaymcorp/vue-modal/dist/style.css";
const toasteo = useToasteo();
const { open, onSuccess } = useEditSatisfaction("1");
onSuccess((note) => console.log(note));
</script>
