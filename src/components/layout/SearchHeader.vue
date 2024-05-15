<script setup lang="ts">
import { useRouter } from 'vue-router'

const model = defineModel()
const { back } = defineProps<{ back?: boolean }>()

const router = useRouter()

const handleBack = () => router.push('/')
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-btn icon="mdi-chevron-left" v-if="back" @click="handleBack" />
    </template>
    <v-app-bar-title>
      <v-text-field
        :placeholder="$t('layout.search')"
        variant="solo"
        flat
        hide-details
        clearable
        clear-icon="mdi-close"
        v-model="model"
      />
    </v-app-bar-title>
  </v-app-bar>
</template>
