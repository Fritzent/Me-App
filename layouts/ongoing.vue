<template>
  <div id="__app">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultBlank',
  setup() {},
})
</script>

<style lang="postcss">
#__nuxt,
#__layout,
#__app {
  @apply tw-css-h-full tw-css-w-full;
}
</style>
