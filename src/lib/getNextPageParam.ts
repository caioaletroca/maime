import type { PaginationResponse } from '@/types'

export function getNextPageParam<T>(lastPage: PaginationResponse<T>) {
  return lastPage.page + 1
}
