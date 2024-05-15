import type { Genre } from './genre'

export type Movie = {
  id: number
  adult: boolean
  title: string
  original_title: string
  overview: string
  backdrop_path: string
  poster_path: string
  release_date: string
  runtime: number
  vote_average: number
  vote_count: number

  genres: Genre[]
}
