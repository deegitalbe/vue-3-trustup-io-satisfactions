<template>
  <form class="space-y-8 relative" action="" @submit.prevent="form.submit">
    <i class="fa-solid fa-star text-2xl text-red-600"></i>
    <h3 class="first-letter:capitalize text-center font-semibold text-2xl">
      {{
        isEdit
          ? $t("app.form.title.updateSatisfaction")
          : $t("app.form.title.satisfaction")
      }}
    </h3>
    <slot></slot>
    <button
      class="px-4 py-3 border-gray-100 rounded-md shadow transition flex ml-auto"
      :class="{
        'cursor-default text-slate-500 bg-slate-200': !form.isActive,
        'text-white  bg-blue-500 hover:bg-blue-600': form.isActive,
      }"
    >
      <span v-if="form.isLoading" class="block animate-bounce">...</span>
      <span v-else>Envoyer</span>
    </button>
  </form>
</template>
<script lang="ts" setup>
import { Form } from "@henrotaym/vue-3-forms";
import { Reactive } from "@henrotaym/vue-3-forms";

defineProps<{ form: Reactive<Form>; isEdit: boolean }>();
</script>
