<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import { themeKey } from '@/types'
import { inject } from 'vue'

const { theme, setTheme } = inject(themeKey)!
</script>

<template>
  <v-main>
    <Header back :title="$t('page.configuration.theme')" />
    <v-list>
      <v-list-item :active="theme === 'system'" :onclick="() => setTheme('system')">
        <template v-slot:prepend>
          <v-icon>mdi-server</v-icon>
        </template>
        <v-list-item-title>{{ $t('page.theme.default') }}</v-list-item-title>
      </v-list-item>
      <v-list-item :active="theme === 'light'" :onclick="() => setTheme('light')">
        <template v-slot:prepend>
          <v-icon>mdi-weather-sunny</v-icon>
        </template>
        <v-list-item-title>{{ $t('page.theme.light') }}</v-list-item-title>
      </v-list-item>
      <v-list-item :active="theme === 'dark'" :onclick="() => setTheme('dark')">
        <template v-slot:prepend>
          <v-icon>mdi-moon-waning-crescent</v-icon>
        </template>
        <v-list-item-title>{{ $t('page.theme.dark') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-main>
</template>
