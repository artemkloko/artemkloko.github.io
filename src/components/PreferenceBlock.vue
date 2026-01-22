<script setup lang="ts">
import { type PropType } from 'vue';
import type { PreferenceItem } from '../data/resume';

defineProps({
  preference: {
    type: Object as PropType<PreferenceItem>,
    required: true
  }
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-4 border-b border-gray-100 last:border-0 break-inside-avoid">
    <div class="md:col-span-3 text-left md:text-right">
       <h4 class="font-bold text-blue-600 uppercase text-sm tracking-wide mt-1">{{ preference.title }}</h4>
    </div>
    <div class="md:col-span-9">
        <p class="text-gray-700 leading-relaxed">{{ preference.content }}</p>
    </div>
  </div>
</template>
