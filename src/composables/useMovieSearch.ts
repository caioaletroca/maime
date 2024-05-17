import { onMounted, ref, watch } from 'vue'
import debounce from 'lodash.debounce'
import isEmpty from 'lodash.isempty'
import { getQueryPath } from '@/lib'
import { useRoute, useRouter } from 'vue-router'

export function useMovieSearch(basePath: string) {
  const route = useRoute()
  const router = useRouter()

  const search = ref<string>('')

  onMounted(() => {
    const { query } = route.query

    // Do nothing if empty
    if (isEmpty(query)) {
      return
    }

    search.value = query?.toString()!
  })

  const handleSubmit = (path: string) => {
    router.replace(path)
  }

  watch(
    search,
    debounce(() => {
      console.log(Boolean(search.value))
      if (search.value) {
        handleSubmit(getQueryPath(basePath, { query: search.value }))
      } else {
        handleSubmit(basePath)
      }
    }, 500)
  )

  return search
}
