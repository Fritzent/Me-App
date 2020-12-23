<template>
  <div class="wrapper">
    <FormulateForm v-model="value" class="form">
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
    </FormulateForm>
  </div>
</template>

<script lang="ts">
// useContext
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageIndex',
  layout: 'default',
  setup() {
    // const { app } = useContext()
    const value = ref<any>({})
    const header = 'This is headers'
    const toastMessage = 'This is message'
    return {
      value,
      header,
      toastMessage,
      // showToast,
    }
    // function showToast() {
    //   app.$toast.show({
    //     type: 'success',
    //     title: header,
    //     message: toastMessage,
    //     classToast: 'tw-css-bg-teal-600 tw-css-w-full tw-css-h-5',
    //     classIcon: 'tw-css-w-24',
    //     classTitle: 'tw-css-text-teal-100',
    //     classMessage: 'tw-css-text-teal-200',
    //     classClose: 'tw-css-text-teal-300',
    //     classTimeout: 'tw-css-bg-teal-800',
    //   })
    // }
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
