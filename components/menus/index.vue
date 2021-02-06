<template>
  <div class="wrapper-menu">
    <div class="container-menu">
      <div v-for="(item, parentIndex) in menu" :key="parentIndex" class="menus">
        <div class="home" @click="iconClick(item.to)">
          <Icon :label="item.text" :icon="item.icon" />
        </div>
        <!-- <div class="about" onClick="toAbout">
          <Icon label="About" icon="info-circle" />
        </div>
        <div class="profile" onClick="toProfile">
          <Icon label="Profile" icon="user" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Menus',
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { app } = useContext()
    return { iconClick }
    function iconClick(to: any) {
      app.router?.go(to)
    }
  },
})
</script>

<style lang="postcss" scoped>
.wrapper-menu {
  .container-menu {
    .menus {
      @apply tw-css-flex;
      @apply tw-css-justify-around tw-css-items-center;
    }
  }
}
</style>
