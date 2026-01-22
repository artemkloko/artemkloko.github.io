<script setup lang="ts">
import { type PropType } from 'vue';
import type { Profile } from '../data';

defineProps({
  profile: {
    type: Object as PropType<Profile>,
    required: true
  }
});
</script>

<template>
  <header class="not-print:bg-blue-600 text-white section-padding print:pb-0 print:text-gray-900">
    <div class="flex flex-col md:flex-row print:flex-row items-center gap-6 md:gap-10">
        <!-- Left: Image -->
        <div class="shrink-0">
            <img :src="profile.image" :alt="profile.name" class="size-40 rounded-full border-4 border-white shadow-lg object-cover bg-white" />
        </div>

        <!-- Middle: Name & Title -->
        <div class="flex-1 text-center md:text-left print:text-left">
            <h1 class="text-3xl md:text-4xl font-black uppercase tracking-wide drop-shadow-md print:text-black">{{ profile.name }}</h1>
            <h2 class="text-lg md:text-xl font-light mt-1 opacity-90 drop-shadow-sm print:text-gray-700">{{ profile.title }}</h2>
            <div class="mt-2 flex gap-2 justify-center md:justify-start print:hidden">
                <a v-for="social in profile.contacts.socials" :key="social.network" :href="social.url" target="_blank" class="text-white hover:text-blue-200 transition-colors" :aria-label="social.network">
                    <font-awesome-icon :icon="social.icon" size="lg" aria-hidden="true" />
                </a>
            </div>
        </div>

        <!-- Right: Contact -->
        <div class="flex flex-col items-center md:items-end print:items-end gap-1 text-sm print:text-gray-800 not-print:hidden">
             <div class="flex items-center text-white/90 print:text-gray-800">
                <font-awesome-icon icon="location-dot" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.location }}</span>
             </div>
             <a :href="`tel:${profile.contacts.phone}`" class="flex items-center hover:text-blue-100 hover:underline transition-colors print:text-gray-800">
                <font-awesome-icon icon="phone" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.phone }}</span>
             </a>
             <a :href="`mailto:${profile.contacts.email}`" class="flex items-center hover:text-blue-100 hover:underline transition-colors print:text-gray-800">
                <font-awesome-icon icon="envelope" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.email }}</span>
             </a>
        </div>
    </div>
  </header>
</template>
