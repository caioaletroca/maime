<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import { languages, localeKey } from '@/types'
import { inject } from 'vue'

const { locale, setLocale } = inject(localeKey)!
</script>

<template>
  <v-main>
    <Header back :title="$t('page.language.title')" />
    <v-list>
      <v-list-item
        v-for="language in languages"
        :key="language.name"
        :onclick="() => setLocale(language.locale)"
        :active="locale === language.locale"
      >
        <v-list-item-title>{{ $t(language.key) }}</v-list-item-title>
        <v-list-item-subtitle>{{ language.name }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-main>
</template>
