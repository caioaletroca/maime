<script setup lang="ts">
import { localeKey, themeKey, type Locale, type SettingsTheme } from '@/types'
import { onMounted, provide, ref, type Ref } from 'vue'

type Settings = {
  theme: SettingsTheme
  locale: Locale
}

const defaultSettings: Settings = {
  theme: 'system',
  locale: 'en-US'
}

const theme = ref<SettingsTheme>(defaultSettings.theme)
const locale = ref<Locale>(defaultSettings.locale)

const set =
  <T,>(ref: Ref<T>) =>
  (value: T) => {
    ref.value = value
    saveCache()
  }

const loadCache = () => {
  theme.value = (localStorage.getItem('theme') as SettingsTheme) ?? defaultSettings.theme
  locale.value = (localStorage.getItem('locale') as Locale) ?? defaultSettings.locale
}

const saveCache = () => {
  localStorage.setItem('theme', theme.value)
  localStorage.setItem('locale', locale.value)
}

onMounted(() => {
  loadCache()
})

provide(themeKey, { theme, setTheme: set(theme) })
provide(localeKey, { locale, setLocale: set(locale) })
</script>

<template>
  <slot />
</template>
