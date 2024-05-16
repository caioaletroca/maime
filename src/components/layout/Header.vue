<script setup lang="ts">
import { useRouter } from 'vue-router'

const { back, search, title } = defineProps<{ back?: boolean; search?: boolean; title?: string }>()

const router = useRouter()

const handleBack = () => router.back()

const handleSearch = () => router.push('/search')
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-btn icon="mdi-chevron-left" v-if="back" @click="handleBack" />
    </template>
    <v-app-bar-title>{{ title ? title : 'Maime' }}</v-app-bar-title>
    <template v-if="search" v-slot:append>
      <v-btn icon="mdi-magnify" @click="handleSearch" />
    </template>
  </v-app-bar>
</template>
