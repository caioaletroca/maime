<script setup lang="ts">
import dayjs from 'dayjs'
import Header from '@/components/layout/Header.vue'
import { getMovieByID } from '@/api'
import { useRoute } from 'vue-router'
import PageLoading from '@/components/PageLoading.vue'

const { params } = useRoute()

const { isLoading, data } = getMovieByID(params.id)
</script>

<template>
  <Header back />

  <v-main v-if="isLoading">
    <PageLoading />
  </v-main>

  <v-main v-else>
    <v-img :src="`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`" />
    <v-sheet class="p-5" elevation="2">
      <div class="text-h5 mb-2">{{ data?.title }}</div>
      <div class="text-body-2">{{ $t('movie.original_title') }}: {{ data?.original_title }}</div>
      <div class="text-body-2">
        {{ dayjs(data?.release_date).year() }} | {{ data?.runtime }} min
      </div>
    </v-sheet>
    <div class="flex flex-col p-5 space-y-5">
      <v-grid>
        <v-row no-gutters>
          <v-col cols="auto" v-for="genre in data?.genres" :key="genre.id">
            <v-chip class="m-1" variant="outlined">
              {{ genre.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-grid>
      <div class="text-body-1">{{ data?.overview }}</div>
      <div class="flex items-center space-x-2">
        <v-icon icon="mdi-star" />
        <div class="text-body-1">{{ data?.vote_average }}/10</div>
        <div class="text-body-2 ml-4">{{ data?.vote_count }}</div>
      </div>
    </div>
  </v-main>
</template>
