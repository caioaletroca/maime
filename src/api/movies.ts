import api from './api'
import { useQuery } from '@tanstack/vue-query'
import type { Movie, PaginationResponse, Locale } from '@/types'
import { toValue, type ComputedRef } from 'vue'
import { getQueryPath } from '@/lib/getQueryPath'

type RequestQuery = {
  language?: Locale
}

export function getMoviesPopular(params?: RequestQuery) {
  return useQuery<PaginationResponse<Movie>>({
    queryKey: ['popular_movies'],
    queryFn: async () => (await api.get(getQueryPath('/3/movie/popular', params))).data
  })
}

export function getMovieByID(id: string, params?: RequestQuery) {
  return useQuery<Movie>({
    queryKey: [`movie_${id}`],
    queryFn: async () => (await api.get(getQueryPath(`/3/movie/${id}`, params))).data
  })
}

type MovieSearchParams = RequestQuery & {
  query: string
}

export function getMovieSearch(params: ComputedRef<MovieSearchParams>) {
  return useQuery<PaginationResponse<Movie>>({
    queryKey: ['search_movie', params],
    queryFn: async ({ queryKey }: any) => {
      if (!queryKey[1].query) {
        return {}
      }

      return (await api.get(getQueryPath('/3/search/movie', toValue(params)))).data
    }
  })
}
