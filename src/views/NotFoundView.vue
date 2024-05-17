<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <v-main>
    <Header back />
    <v-content>
      <div class="flex flex-col items-center justify-center h-full">
        <div class="text-subtitle-1 text-grey-darken-1">{{ $t('page.notfound.text') }}</div>
      </div>
    </v-content>
  </v-main>
</template>
