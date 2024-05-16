<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-bottom-navigation grow>
    <v-btn value="home" :onclick="() => router.push('/')">
      <v-icon icon="mdi-home" />
    </v-btn>

    <v-btn value="configuration" :onclick="() => router.push('/configuration')">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
