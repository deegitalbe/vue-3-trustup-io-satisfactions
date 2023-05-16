<template>
  <form class="space-y-8" action="" @submit.prevent="createSatisfactionNote()">
    <h3 class="first-letter:capitalize text-center text-base font-semibold">
      {{ $t("app.form.title.satisfaction") }}
    </h3>

    <div class="items-center grid grid-cols-3 gap-4 mt-5">
      <div class="col-span-2 font-normal text-sm">
        <label for="account" class="text-gray-500 block first-letter:capitalize"
          >Account</label
        >
        <input
          id="account"
          type="text"
          name="account"
          class="border-[#EDEDED] border-[1px] rounded-[10px] p-2 mt-1 w-full"
        />
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup></script>
