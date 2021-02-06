<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">Me-Apps</div>
      <div class="menus">
        <Menus />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Headers',
  setup() {},
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply tw-css-bg-gray-900;
  @apply tw-css-px-2 tw-css-py-1;
  .container {
    @apply tw-css-flex;
    @apply tw-css-justify-between tw-css-items-center;
    @apply tw-css-text-custome-300 tw-css-text-base tw-css-font-bold;
    .title {
      @apply flex-1;
    }
    .menus {
      @apply flex-1;
    }
  }
}
</style>
