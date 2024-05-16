<script setup lang="ts">
import { themeKey } from '@/types'
import { computed, inject } from 'vue'

const { theme } = inject(themeKey)!

const currentTheme = computed(() => {
  if (theme.value === 'system') {
    // Check to see if Media-Queries are supported
    if (window.matchMedia) {
      // Check if the dark-mode Media-Query matches
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else {
        return 'light'
      }
    }
  }

  return theme.value === 'dark' ? 'dark' : 'light'
})
</script>

<template>
  <v-theme-provider with-background :theme="currentTheme">
    <p>{{ currentTheme }}</p>
    <slot />
  </v-theme-provider>
</template>
