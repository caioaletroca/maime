export type PaginationResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type InfinitePaginationResponse<T> = {
  pages: PaginationResponse<T>[]
}
