<script setup lang="ts">
import { type PropType, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { format, intervalToDuration, formatDuration, addMonths } from 'date-fns';
import { enUS, de } from 'date-fns/locale';
import type { Experience } from '../data';

const props = defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true
  }
});

const { locale } = useI18n();

const dateLocale = computed(() => locale.value === 'de' ? de : enUS);

const formattedStart = computed(() => {
  if (!props.experience.period.start) return '';
  return format(new Date(props.experience.period.start), 'MMMM yyyy', { locale: dateLocale.value });
});

const formattedEnd = computed(() => {
  if (!props.experience.period.end) return locale.value === 'de' ? 'Aktuell' : 'Present';
  return format(new Date(props.experience.period.end), 'MMMM yyyy', { locale: dateLocale.value });
});

const formattedDuration = computed(() => {
  const start = new Date(props.experience.period.start);
  let end = props.experience.period.end ? new Date(props.experience.period.end) : new Date();

  // Make end month inclusive if explicit date provided
  if (props.experience.period.end) {
    end = addMonths(end, 1);
  }

  const duration = intervalToDuration({ start, end });

  return formatDuration(duration, {
    format: ['years', 'months'],
    locale: dateLocale.value
  }) || (locale.value === 'de' ? 'weniger als ein Monat' : 'less than a month');
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-gray-100 last:border-0 break-inside-avoid">
    <!-- Left: Dates -->
    <div class="md:col-span-3 text-left md:text-right text-gray-600">
        <div class="font-bold text-gray-800 inline md:block capitalize">{{ formattedStart }}</div>
        <div class="font-bold text-gray-800 inline md:hidden"> - </div>
        <div class="font-bold text-gray-800 inline md:block capitalize">{{ formattedEnd }}</div>
        <div class="text-xs uppercase tracking-wide mt-1 text-gray-500">{{ formattedDuration }}</div>
    </div>

    <!-- Right: Content -->
    <div class="md:col-span-9">
        <h3 class="text-xl font-bold text-blue-600">{{ experience.role }}</h3>
        <div class="text-sm font-medium text-gray-600 mb-3">
            <span class="font-bold text-gray-700">{{ experience.company.name }}</span>
            <span v-if="experience.company.url" class="mx-2 text-gray-300">|</span>
            <a v-if="experience.company.url" :href="experience.company.url" target="_blank" class="text-blue-500 hover:underline break-all">{{ experience.company.url }}</a>
            <span v-if="experience.company.location" class="mx-2 text-gray-300">|</span>
            <span v-if="experience.company.location">{{ experience.company.location }}</span>
        </div>

        <ul class="list-disc list-outside ml-5 space-y-1 text-gray-700 mb-3 leading-relaxed">
            <li v-for="(detail, idx) in experience.details" :key="idx">{{ detail }}</li>
        </ul>

        <div class="text-xs text-gray-400 pt-2 flex flex-wrap gap-2 uppercase tracking-wider">
            <span>{{ experience.meta.sector }}</span>
            <span class="text-gray-300">|</span>
            <span>{{ experience.meta.employmentType }}</span>
        </div>
    </div>
  </div>
</template>
