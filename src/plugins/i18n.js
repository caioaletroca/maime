import { createI18n } from 'vue-i18n'
import { en, pt } from 'vuetify/locale'
import localesEnglish from '@/../locales/en-US.json'
import localesPortuguese from '@/../locales/pt-BR.json'

export default createI18n({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en',
  messages: {
    'en-US': {
      $vuetify: en,
      ...localesEnglish
    },
    'pt-BR': {
      $vuetify: pt,
      ...localesPortuguese
    }
  }
})
