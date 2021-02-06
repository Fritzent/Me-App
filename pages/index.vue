<template>
  <div class="wrapper">
    <!-- <FormulateForm v-model="value" class="form">
      <FormulateInput
        type="text"
        label="Username"
        name="username"
        placeholder="Masukkan username anda..."
      />
      <FormulateInput
        type="password"
        label="Password"
        name="password"
        placeholder="Masukkan password anda..."
      />
    </FormulateForm> -->
  </div>
</template>

<script lang="ts">
// useContext
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageIndex',
  layout: 'default',
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply tw-css-w-full;
  @apply tw-css-bg-gray-900;
  .form {
    @apply tw-css-bg-green-900;
    @apply tw-css-flex tw-css-flex-col tw-css-justify-center tw-css-items-center;
    max-width: 480px;
  }
}

@screen md {
  .wrapper {
    .form {
      @apply tw-css-w-auto;
      min-width: 100px;
    }
  }
}
</style>
