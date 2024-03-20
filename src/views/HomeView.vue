<script setup lang="ts">
import { getMoviesPopular } from '@/api'
import BottomNavigation from '@/components/BottomNavigation.vue'
import Header from '@/components/Header.vue'
import MovieCard from '@/components/MovieCard.vue'

const { data } = getMoviesPopular()
</script>

<template>
  <main>
    <Header />
    <v-main>
      <v-container>
        <v-row>
          <v-col v-if="data?.results" v-for="movie in data.results" cols="6">
            <MovieCard :key="movie.id" :movie="movie" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <BottomNavigation />
  </main>
</template>
