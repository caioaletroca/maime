<script setup lang="ts">
import { getMoviesPopular } from '@/api'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import Header from '@/components/layout/Header.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const { data, fetchNextPage } = getMoviesPopular({ language: i18n.locale.value })

const handleLoad = ({ done }: { done: (status: string) => void }) => {
  fetchNextPage()
  done('ok')
}
</script>

<template>
  <main>
    <Header search />
    <v-main>
      <v-infinite-scroll :items="data" :onLoad="handleLoad">
        <v-container>
          <v-row>
            <v-col v-if="data" v-for="movie in data" cols="6">
              <MovieCard :key="movie.id" :movie="movie" />
            </v-col>
          </v-row>
        </v-container>
      </v-infinite-scroll>
    </v-main>
    <BottomNavigation />
  </main>
</template>
