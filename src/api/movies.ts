import api from './api'
import { useQuery } from '@tanstack/vue-query'
import type { Movie } from '@/types'

type PaginationResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export function getMoviesPopular() {
  return useQuery<PaginationResponse<Movie>>({
    queryKey: ['popular_movies'],
    queryFn: async () =>
      (await api.get(`/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`)).data
  })
}
