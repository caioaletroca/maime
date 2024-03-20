<script setup>
import Header from '@/components/Header.vue'
import { getMovieByID } from '@/api'
import { useRoute } from 'vue-router'

const { params } = useRoute()

const { data } = getMovieByID(params.id)
</script>

<template>
  <Header back />
  <v-main v-if="data">
    <v-img :src="`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`" />
    <p>{{ data.title }}</p>
  </v-main>
</template>
