<script setup lang="ts">
import { localeKey } from '@/types'
import { inject, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const { locale } = inject(localeKey)!

watch(locale, () => {
  i18n.locale.value = locale.value
})
</script>

<template>
  <slot />
</template>
