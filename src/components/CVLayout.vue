<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100 bg-[url('/background.jpg')] bg-cover bg-center font-sans antialiased">
    <!-- Skip Link for Keyboard Users -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:font-bold focus:shadow-lg focus:rounded">
      Skip to content
    </a>

    <LanguageSwitcher />

    <main id="main-content" class="mx-auto max-w-6xl bg-white shadow-[0_0_33px_0_rgba(0,0,0,0.5)] min-h-screen flex flex-col print:shadow-none print:max-w-full print:m-0">
      <slot></slot>
    </main>
  </div>
</template>

<style>
@media print {
  body {
    background: none !important;
  }
}
</style>
