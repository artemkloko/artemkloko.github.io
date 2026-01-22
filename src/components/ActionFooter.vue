<script setup lang="ts">
import { type PropType } from 'vue';
import type { Footer } from '../data';

defineProps({
  footer: {
    type: Object as PropType<Footer>,
    required: true
  }
});

const handlePrint = () => {
    window.print();
};
</script>

<template>
  <footer class="print:hidden py-10 px-6 bg-gray-50 border-t border-gray-200 mt-auto">
    <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <a :href="footer.meetingUrl" target="_blank" class="w-full md:w-auto text-center px-6 py-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transform hover:-translate-y-0.5 transition-all">
            <font-awesome-icon icon="calendar-check" class="mr-2" aria-hidden="true" />
            {{ $t('footer.schedule') }}
        </a>
        <a :href="`mailto:${footer.email}`" class="w-full md:w-auto text-center px-6 py-3 bg-green-600 text-white font-bold rounded shadow hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none transform hover:-translate-y-0.5 transition-all">
             <font-awesome-icon icon="envelope" class="mr-2" aria-hidden="true" />
            {{ $t('footer.email') }}
        </a>
        <button @click="handlePrint" class="w-full md:w-auto text-center px-6 py-3 bg-orange-500 text-white font-bold rounded shadow hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none transform hover:-translate-y-0.5 transition-all cursor-pointer">
             <font-awesome-icon icon="print" class="mr-2" aria-hidden="true" />
            {{ $t('footer.print') }}
        </button>
    </div>
  </footer>
</template>
