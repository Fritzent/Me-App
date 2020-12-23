import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // identitasUrl: process.env.IDENTITAS_URL || 'http://localhost:3009',
    // identitasApiUrl: process.env.IDENTITAS_API_URL || 'http://localhost:5520',
    // akademikUrl: process.env.AKADEMIK_URL || 'http://localhost:5550',
    // siswaUrl: process.env.SISWA_URL || 'http://localhost:4480',
    // cariUrl: process.env.CARI_URL || 'http://localhost:4444',
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
  plugins: [
    '~/plugins/vue-formulate',
    // {
    //   src: '@/plugins/global.client',
    //   mode: 'client',
    // },
    // {
    //   src: '@/plugins/axios',
    // },
  ],
  components: [
    '~/components/',
    // { path: '~/components/atoms/', prefix: 'atom', ignore: ['x.*'] },
    // { path: '~/components/molecules/', prefix: 'molecule' },
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', ['nuxt-tailvue', { toast: true }]],
  router: {
    // middleware: ['auth', 'main'],
  },
  axios: {},
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
      },
    },
    // watch: ['@/modules/identitas', '@/modules/cari'],
  },
  //   firebase: {
  //     config: {
  //       apiKey: 'AIzaSyBUsfA6puIQUEeK2Ya4Kld2tomka0_dBho',
  //       authDomain: 'neo-app-project.firebaseapp.com',
  //       databaseURL: 'https://neo-app-project.firebaseio.com',
  //       projectId: 'neo-app-project',
  //       storageBucket: 'neo-app-project.appspot.com',
  //       messagingSenderId: '218090186045',
  //       appId: '1:218090186045:web:ff08fe9e4be75e49ee1154',
  //       measurementId: 'G-8G47NL4PV0',
  //     },
  //     services: {
  //       storage: true,
  //     },
  //   },
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
      ],
    },
  },
}

export default config
