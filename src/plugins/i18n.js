import { createI18n } from 'vue-i18n'
import { en, pt } from 'vuetify/locale'
import localesEnglish from '@/../locales/en-US.json'

export default createI18n({
  locale: 'en-US',
  fallbackLocale: 'en',
  messages: {
    'en-US': {
      ...en,
      ...localesEnglish
    },
    pt: {
      ...pt
    }
  }
})
