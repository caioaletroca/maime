<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'

const { theme } = inject('theme')
// const currentTheme = ref<'dark' | 'light'>(theme)

const currentTheme = computed(() => {
  console.log(theme.value === 'system')
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

// onMounted(() => {
//   if (theme === 'system') {
//     // Check to see if Media-Queries are supported
//     if (window.matchMedia) {
//       // Check if the dark-mode Media-Query matches
//       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         currentTheme.value = 'dark'
//       } else {
//         currentTheme.value = 'light'
//       }
//     }
//   }
// })
</script>

<template>
  <v-theme-provider with-background :theme="currentTheme">
    <p>{{ currentTheme }}</p>
    <slot />
  </v-theme-provider>
</template>
