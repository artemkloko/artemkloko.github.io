<script setup lang="ts">
import { type PropType } from 'vue';
import type { Summary } from '../data';

defineProps({
  summary: {
    type: Object as PropType<Summary>,
    required: true
  }
});
</script>

<template>
  <div class="section-padding border-b border-gray-200">
    <div class="flex flex-col md:flex-row gap-2 md:gap-4 text-gray-500 pb-4 text-sm font-medium uppercase tracking-wider not-print:hidden">
        <span><strong class="text-gray-700">{{ $t('summary.citizenship') }}:</strong> {{ summary.citizenship }}</span>
        <span class="hidden md:inline text-gray-300">|</span>
        <span><strong class="text-gray-700">{{ $t('summary.languages') }}:</strong> {{ summary.languages }}</span>
    </div>
    <p class="text-gray-700 leading-relaxed mx-auto">
        {{ summary.bio }}
    </p>
  </div>
</template>
