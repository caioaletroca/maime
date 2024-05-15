import { getQueryString } from './getQueryString'

export function getQueryPath(basePath: string, queryParams?: any) {
  return `${basePath}${getQueryString(queryParams)}`
}
