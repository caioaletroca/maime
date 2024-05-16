<script setup lang="ts">
import { RouterView } from 'vue-router'
import Settings from '@/components/Settings.vue'
import Theme from './components/Theme.vue'
</script>

<template>
  <header></header>

  <v-app>
    <Settings>
      <Theme>
        <RouterView />
      </Theme>
    </Settings>
  </v-app>
</template>

<style scoped></style>
