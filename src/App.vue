<script setup lang="ts">
import { RouterView } from 'vue-router'
import Settings from '@/components/Settings.vue'
import Theme from './components/Theme.vue'
import Language from './components/Language.vue'
</script>

<template>
  <header></header>

  <v-app>
    <Settings>
      <Theme>
        <Language>
          <RouterView />
        </Language>
      </Theme>
    </Settings>
  </v-app>
</template>

<style scoped></style>
