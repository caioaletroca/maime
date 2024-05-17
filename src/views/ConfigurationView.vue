<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import Header from '@/components/layout/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-main>
    <Header back :title="$t('page.configuration.title')" />
    <v-list>
      <v-list-item :onclick="() => router.push('/theme')">
        <template v-slot:prepend>
          <v-icon>mdi-theme-light-dark</v-icon>
        </template>
        <v-list-item-title>{{ $t('page.configuration.theme') }}</v-list-item-title>
      </v-list-item>
      <v-list-item :onclick="() => router.push('/language')">
        <template v-slot:prepend>
          <v-icon>mdi-translate</v-icon>
        </template>
        <v-list-item-title>{{ $t('page.configuration.language') }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <BottomNavigation />
  </v-main>
</template>
