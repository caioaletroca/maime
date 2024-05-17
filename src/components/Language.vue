<script setup lang="ts">
import { localeKey } from '@/types'
import { onMounted } from 'vue'
import { inject, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const { locale } = inject(localeKey)!

const getBrowserLanguage = () => {
  const language = navigator.language

  if (language.includes('en')) {
    return 'en-US'
  }

  if (language.includes('pt')) {
    return 'pt-BR'
  }

  return 'en-US'
}

onMounted(() => {
  if (!locale.value) {
    i18n.locale.value = getBrowserLanguage()
  }
})

watch(locale, () => {
  i18n.locale.value = locale.value
})
</script>

<template>
  <slot />
</template>
