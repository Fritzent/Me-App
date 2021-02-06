import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:1999',
  },
  head: {
    title: 'Me-App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/vue-formulate'],
  components: ['~/components/'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', ['nuxt-tailvue', { toast: true }]],
  router: {},
  axios: {},
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
      },
    },
  },
  fontawesome: {
    component: 'Fa',
    proIcons: {
      regular: [
        'faArrowLeft',
        'faArrowRight',
        'faChevronDown',
        'faChevronUp',
        'faChevronLeft',
        'faChevronRight',
        'faPlus',
        'faMinus',
        'faCheck',
        'faSpinner',
        'faSearch',
        'faDiceD4',
        'faTrashAlt',
        'faTrash',
        'faTimes',
        'faBars',
        'faEllipsisH',
        'faEllipsisV',
        'faInfoCircle',
        'faGripLines',
        'faBell',
        'faHome',
        'faChalkboard',
        'faCommentsAlt',
        'faPenAlt',
        'faCalendarAlt',
        'faFolders',
        'faTasks',
        'faKey',
        'faPaperPlane',
        'faSignOut',
        'faUser',
      ],
    },
  },
}

export default config
