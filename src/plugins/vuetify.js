import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import i18n from './i18n'
import { useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: { dark: false },
      dark: { dark: true }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  }
})
