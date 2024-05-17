<script setup lang="ts">
import { getMoviesPopular } from '@/api'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import Header from '@/components/layout/Header.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const { data } = getMoviesPopular({ language: i18n.locale.value })
</script>

<template>
  <main>
    <Header search />
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
