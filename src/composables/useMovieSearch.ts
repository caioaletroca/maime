import { computed, onMounted, ref, toValue, watch } from 'vue'
import debounce from 'lodash.debounce'
import isEmpty from 'lodash.isempty'
import { getQueryPath } from '@/lib'
import { useRoute, useRouter } from 'vue-router'

export function useMovieSearch() {
  const route = useRoute()
  const router = useRouter()

  const search = ref('')
  const query = computed(() => ({
    query: search.value
  }))

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
    query,
    debounce(() => handleSubmit(getQueryPath('/search', toValue(query))), 500)
  )

  return { query, value: search }
}
