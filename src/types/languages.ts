import { type InjectionKey, type Ref } from 'vue'

export const languages = [
  {
    name: 'English',
    key: 'languages.english',
    locale: 'en-US'
  },
  {
    name: 'Português',
    key: 'languages.portuguese',
    locale: 'pt-BR'
  }
]

export type Language = typeof languages extends readonly (infer ElementType)[] ? ElementType : never

export type Locale = Language['locale']

export const localeKey = Symbol() as InjectionKey<{
  locale: Ref<Locale>
  setLocale: (value: Locale) => void
}>
