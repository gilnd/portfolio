<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  isExternal:  { type: Boolean, default: false },
  href: { type: String, default: '/' },
  label: { type: String, default: null },
  icon: { type: String, default: null }
})

</script>
<template>
  <div class='text-base md:text-xl transition duration-200 ease-in-out transform hover:text-primary hover:-translate-y-1'>
    <router-link v-if="!isExternal" :to="href" class="flex space-x-2">
      <Icon v-if="icon" :icon="icon" class="text-lg md:text-2xl" />
      <span v-if="label">{{label}}</span>
    </router-link>
    <a v-if="isExternal" :href="href" target="_blank" class="flex space-x-2">
      <Icon v-if="icon" :icon="icon" class="text-lg md:text-2xl" />
      <span v-if="label">{{label}}</span>
    </a>
  </div>
</template>
