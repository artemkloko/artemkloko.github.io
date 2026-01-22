<script setup lang="ts">
import { type PropType } from 'vue';
import type { SkillCategory } from '../data/resume';

defineProps({
  skillGroup: {
    type: Object as PropType<SkillCategory>,
    required: true
  }
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-3 border-b border-dashed border-gray-200 last:border-0 break-inside-avoid">
    <!-- Left: Title -->
    <div class="md:col-span-3 text-left md:text-right font-bold text-gray-800">
        {{ skillGroup.category }}
    </div>

    <!-- Right: Skills -->
    <div class="md:col-span-9">
        <div v-if="skillGroup.layoutType === 'inline'" class="leading-relaxed text-gray-700">
            <template v-for="(item, idx) in skillGroup.items" :key="idx">
                <span class="inline-block font-medium">{{ item }}</span>
                <span v-if="idx < skillGroup.items.length - 1" class="mx-2 text-gray-300">·</span>
            </template>
        </div>
        <ul v-else class="space-y-1 text-gray-700 list-none">
            <li v-for="(item, idx) in skillGroup.items" :key="idx" class="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                {{ item }}
            </li>
        </ul>
    </div>
  </div>
</template>
