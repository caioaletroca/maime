<script setup lang="ts">
import { getPosterPath } from '@/lib'
import { useRouter } from 'vue-router'
import { getMovieSearch } from '@/api/movies'
import dayjs from 'dayjs'
import type { Movie } from '@/types'
import PageLoading from '@/components/PageLoading.vue'
import SearchHeader from '@/components/layout/SearchHeader.vue'
import { useMovieSearch } from '@/composables'

const router = useRouter()

const handleClick = (movie: Movie) => {
  router.push(`/movie/${movie.id}`)
}

const { query, value } = useMovieSearch()
const { data, isLoading } = getMovieSearch(() => query)
</script>

<template>
  <v-main>
    <SearchHeader back v-model="value" />

    <v-main v-if="!(data && data?.results) && isLoading">
      <PageLoading />
    </v-main>

    <v-list v-if="data && data?.results?.length! > 0">
      <v-list-item
        v-for="movie in data.results"
        :key="movie.id"
        :onclick="() => handleClick(movie)"
      >
        <template v-slot:prepend>
          <v-img width="60" height="60" :src="getPosterPath(movie.poster_path)"></v-img>
        </template>
        <v-list-item-title>{{ movie.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ dayjs(movie.release_date).year() }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-main>
</template>
