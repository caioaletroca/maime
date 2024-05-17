import type { InfinitePaginationResponse, PaginationResponse } from '@/types'

export function getInfinitePaginatedData<T>(data: InfinitePaginationResponse<T>): T[] {
  return data?.pages?.reduce(
    (sum: T[], page: PaginationResponse<T>) => [...sum, ...page.results],
    []
  )
}
