<template>
  <div id="__app">
    <Headers :menu="menu" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultBlank',
  setup() {
    const menu = [
      {
        text: 'Home',
        to: '/',
        icon: 'home',
      },
      {
        text: 'About',
        to: '/about',
        icon: 'info-circle',
      },
      {
        text: 'Profile',
        to: '/profile',
        icon: 'user',
      },
    ]

    return { menu }
  },
})
</script>

<style lang="postcss">
#__nuxt,
#__layout,
#__app {
  @apply tw-css-h-full tw-css-w-full;
}
</style>
