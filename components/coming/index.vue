<template>
  <div class="background"></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Coming',
  setup() {},
})
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  overflow: hidden;
}

.background {
  width: 100vw;
  height: 100vh;
  background: #3e1e68;
}
</style>
