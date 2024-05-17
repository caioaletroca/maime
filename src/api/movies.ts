import api from './api'
import { useQuery, useInfiniteQuery } from '@tanstack/vue-query'
import type { Movie, PaginationResponse, InfinitePaginationResponse, Locale } from '@/types'
import { toValue, type ComputedRef } from 'vue'
import { getQueryPath, getNextPageParam, getSelectInfinitePaginatedData } from '@/lib'

type RequestQuery = {
  language?: Locale
}

export function getMoviesPopular(params?: RequestQuery) {
  return useInfiniteQuery<InfinitePaginationResponse<Movie>>({
    queryKey: ['popular_movies'],
    queryFn: async ({ pageParam }: any) => {
      return (
        await api.get(
          getQueryPath('/3/movie/popular', {
            ...params,
            ...(pageParam
              ? {
                  page: pageParam
                }
              : {})
          })
        )
      ).data
    },
    getNextPageParam,
    select: getSelectInfinitePaginatedData<Movie>
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
