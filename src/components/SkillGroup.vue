<script setup lang="ts">
import { type PropType } from 'vue';
import type { SkillCategory } from '../data';

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
    <div class="md:col-span-3 text-left md:text-right">
        <h3 class="font-bold text-gray-800 text-base">{{ skillGroup.category }}</h3>
    </div>

    <!-- Right: Skills -->
    <div class="md:col-span-9">
        <div v-if="skillGroup.layoutType === 'inline'" class="leading-relaxed text-gray-700">
            <template v-for="(item, idx) in skillGroup.items" :key="idx">
                <span class="inline-block font-medium last:after:hidden after:content-['|'] after:mx-2 after:text-gray-300">{{ item }}</span>
            </template>
        </div>
        <ul v-else class="list-disc list-outside ml-5 space-y-1 text-gray-700">
            <li v-for="(item, idx) in skillGroup.items" :key="idx">
                {{ item }}
            </li>
        </ul>
    </div>
  </div>
</template>
