<script setup lang="ts">
import { getPosterPath } from '@/lib'
import type { Movie } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()

const { movie } = defineProps<{ movie: Pick<Movie, 'id' | 'poster_path'> }>()

const handleClick = () => router.push(`/movie/${movie.id}`)
</script>

<template>
  <v-sheet :elevation="2" @click="handleClick">
    <v-img cover :src="getPosterPath(movie.poster_path)"></v-img>
  </v-sheet>
</template>
