import api from './api'
import { useQuery } from '@tanstack/vue-query'
import type { Movie } from '@/types'
import { toValue, ref, toRef, type ComputedRef } from 'vue'

type PaginationResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export function getMoviesPopular() {
  return useQuery<PaginationResponse<Movie>>({
    queryKey: ['popular_movies'],
    queryFn: async () => (await api.get('/3/movie/popular')).data
  })
}

export function getMovieByID(id: string) {
  return useQuery<Movie>({
    queryKey: [`movie_${id}`],
    queryFn: async () => (await api.get(`/3/movie/${id}`)).data
  })
}

type MovieSearchParams = {
  query: string
}

export function getMovieSearch(params) {
  return useQuery<PaginationResponse<Movie>>({
    queryKey: ['search_movie', params()],
    queryFn: async (queryKey) =>
      (
        await api.get('/3/search/movie', {
          params: toValue(params())
        })
      ).data
  })
}
