<script setup lang="ts">
import { useRouter } from 'vue-router'

const { back } = defineProps<{ back?: boolean }>()

const router = useRouter()

const handleBack = () => router.back()
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-btn icon="mdi-chevron-left" v-if="back" @click="handleBack" />
    </template>
    <v-app-bar-title>Maime</v-app-bar-title>
  </v-app-bar>
</template>
