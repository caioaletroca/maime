import { type InjectionKey, type Ref } from 'vue'

export type SettingsTheme = 'light' | 'dark' | 'system'
export type SettingsLanguage = ''

export const themeKey = Symbol() as InjectionKey<{
  theme: Ref<SettingsTheme>
  setTheme: (value: SettingsTheme) => void
}>
