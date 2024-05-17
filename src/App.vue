<script setup lang="ts">
import { RouterView } from 'vue-router'
import Settings from '@/components/Settings.vue'
import Theme from './components/Theme.vue'
import Language from './components/Language.vue'
</script>

<template>
  <header></header>

  <Settings>
    <Theme>
      <Language>
        <v-app>
          <RouterView />
        </v-app>
      </Language>
    </Theme>
  </Settings>
</template>

<style scoped></style>
