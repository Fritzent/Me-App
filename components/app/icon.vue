<template>
  <div class="wrapper-icon">
    <div class="container-icon">
      <fa :icon="['far', icon]" fixed-width class="icon" />
      <div class="label">{{ label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>

<style lang="postcss" scoped>
.wrapper-icon {
  .container-icon {
    @apply tw-css-flex tw-css-items-center;
    .icon {
      @apply tw-css-mr-1;
    }
  }
}
</style>
