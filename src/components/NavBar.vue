<script setup>
import Link from './Link.vue';
import ThemeToggler from './ThemeToggler.vue';

</script>
<template>
  <div class="flex justify-between py-6 items-center">
    <span class="text-xl italic font-mono font-thin tracking-widest leading-loose text-primary ">giln.me</span>
    <div class="flex flex-wrap gap-6 text-base md:text-xl ">
      <Link href="https://github.com/gilnd" :isExternal="true" label="Github"  icon="feather:github"/>
      <ThemeToggler />
      
    </div>
  </div>
</template>