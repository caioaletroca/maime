<script setup lang="ts">
import { themeKey, type SettingsTheme } from '@/types'
import { onMounted, provide, ref } from 'vue'

type Settings = {
  theme: SettingsTheme
}

const defaultSettings: Settings = {
  theme: 'system'
}

const theme = ref<SettingsTheme>(defaultSettings.theme)

const setTheme = (value: SettingsTheme) => {
  theme.value = value
  saveCache()
}

const loadCache = () => {
  theme.value = (localStorage.getItem('theme') as SettingsTheme) ?? defaultSettings.theme
}

const saveCache = () => {
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  loadCache()
})

provide(themeKey, { theme, setTheme })
</script>

<template>
  <slot />
</template>
