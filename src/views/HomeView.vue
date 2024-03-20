<script setup lang="ts">
import { getMoviesPopular } from '@/api'
import BottomNavigation from '@/components/BottomNavigation.vue'
import Header from '@/components/Header.vue'

const { data } = getMoviesPopular()
</script>

<template>
  <main>
    {{ console.log(data) }}
    <Header />
    <BottomNavigation />
  </main>
</template>
