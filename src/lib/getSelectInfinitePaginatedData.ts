import type { InfinitePaginationResponse } from '@/types'
import { getInfinitePaginatedData } from './getInfinitePaginatedData'

export function getSelectInfinitePaginatedData<T>(data: InfinitePaginationResponse<T>) {
  return getInfinitePaginatedData<T>(data)
}
