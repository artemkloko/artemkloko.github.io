<script setup lang="ts">
import { type PropType } from 'vue';
import type { Summary } from '../data/resume';

defineProps({
  summary: {
    type: Object as PropType<Summary>,
    required: true
  }
});
</script>

<template>
  <div class="px-6 py-6 border-b border-gray-200">
    <div class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-gray-500 mb-4 text-sm font-medium uppercase tracking-wider">
        <span><strong class="text-gray-700">Citizenship:</strong> {{ summary.citizenship }}</span>
        <span class="hidden md:inline text-gray-300">|</span>
        <span><strong class="text-gray-700">Languages:</strong> {{ summary.languages }}</span>
    </div>
    <p class="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        {{ summary.bio }}
    </p>
  </div>
</template>
