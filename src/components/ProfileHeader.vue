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
  <div class="bg-blue-600 text-white p-6 md:p-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <!-- Left: Image -->
        <div class="md:col-span-2 flex justify-center md:justify-start">
            <img :src="profile.image" :alt="profile.name" class="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg object-cover bg-white" />
        </div>

        <!-- Middle: Name & Title -->
        <div class="md:col-span-6 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-black uppercase tracking-wide drop-shadow-md">{{ profile.name }}</h1>
            <h2 class="text-lg md:text-xl font-light mt-1 opacity-90 drop-shadow-sm">{{ profile.title }}</h2>
            <div class="mt-4 flex gap-4 justify-center md:justify-start">
                <a v-for="social in profile.contacts.socials" :key="social.network" :href="social.url" target="_blank" class="text-white hover:text-blue-200 transition-colors" :aria-label="social.network">
                    <font-awesome-icon :icon="social.icon" size="lg" />
                </a>
            </div>
        </div>

        <!-- Right: Contact -->
        <div class="md:col-span-4 flex flex-col items-center md:items-end space-y-2 text-sm mt-4 md:mt-0">
             <div class="flex items-center text-white/90">
                <font-awesome-icon icon="location-dot" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.location }}</span>
             </div>
             <a :href="`tel:${profile.contacts.phone}`" class="flex items-center hover:text-blue-100 hover:underline transition-colors">
                <font-awesome-icon icon="phone" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.phone }}</span>
             </a>
             <a :href="`mailto:${profile.contacts.email}`" class="flex items-center hover:text-blue-100 hover:underline transition-colors">
                <font-awesome-icon icon="envelope" class="w-4 text-center mr-2" aria-hidden="true" />
                <span>{{ profile.contacts.email }}</span>
             </a>
        </div>
    </div>
  </div>
</template>
