<script setup>
import { getRandomTailwindColor } from '@/modules/utils.js'

</script>
<template>  
  <div :style="'background: ' + getRandomTailwindColor(200)" 
    class="hover:shadow-lg flex gap-2 px-3 py-0.5 rounded-full text-sm font-medium text-black">
    <slot></slot>
  </div>
</template>