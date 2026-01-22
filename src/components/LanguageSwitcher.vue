<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();

const toggleLanguage = () => {
  // We prefer using the current route param strictly for the toggle logic to be deterministic based on URL
  const currentRouteLocale = router.currentRoute.value.params.locale as string;
  const newLang = currentRouteLocale === 'en' ? 'de' : 'en';

  // Force update the locale immediately for good measure, though the route guard should handle it
  // locale.value = newLang; // Optional, let the route guard do it

  router.push({ name: 'cv', params: { locale: newLang } });
};
</script>

<template>
  <button
    @click="toggleLanguage"
    class="fixed top-4 right-4 z-50 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all print:hidden cursor-pointer"
    aria-label="Switch Language"
  >
    <span :class="{ 'text-blue-600': locale === 'en' }">EN</span>
    <span class="mx-1 text-gray-300">|</span>
    <span :class="{ 'text-blue-600': locale === 'de' }">DE</span>
  </button>
</template>
