import api from './api'
import { useQuery } from '@tanstack/vue-query'

export function getMoviesPopular() {
  return useQuery({
    queryKey: ['popular_movies'],
    queryFn: () =>
      api.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`
      )
  })
}
