<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <div
      class="absolute top-5 right-5 py-1 px-2 bg-[#FF8A00] rounded-md text-white text-xs font-semibold cursor-pointer text-center"
      @click="open()"
    >
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
import "./lib";
import { NotificationContainer } from "@deegital/vue-trustup-io-toasteo";
import { useToasteo } from "@deegital/vue-trustup-io-toasteo";
import { ModalsContainer } from "vue-final-modal";
import useCreateSatisfaction from "./lib/composables/useCreateSatisfactionModal";
import { Attributes } from "./lib/composables/useCreateSatisfactionModal";
import Origin from "./lib/enums/Origin";
// const model = {
//   data: {
//     id: 1,
//     value: 4,
//     origin: "worksite",
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae maiores non repudiandae, in, omnis pariatur minima nulla ullam alias itaque qui odio. Repellat et porro doloribus quis tenetur! Ipsam, iusto!",
//     is_using: true,
//     reason: { id: 1, title: "7 reasons why", origin: "worksite" },
//     created_by_id: 1,
//     date: "2023-05-22T09:49:02.000000Z",
//     related_to_id: "1",
//     related_to_type: "tenant",
//   },
// };

const data: Attributes = {
  origin: Origin.WORKSITE,
  related_to_id: "1",
  related_to_type: "tenant",
  created_by_id: 1,
};

const toasteo = useToasteo();
const { open } = useCreateSatisfaction(data);

// onSuccess((note) => console.log(note));
// const updateNoteModal = useUpdateNoteModal({ model });
</script>
