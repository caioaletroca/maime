<script setup lang="ts">
import type { Movie } from '@/types'

const { movie } = defineProps<{ movie: Pick<Movie, 'poster_path'> }>()
</script>

<template>
  <v-sheet :elevation="2">
    <v-img cover :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></v-img>
  </v-sheet>
</template>
