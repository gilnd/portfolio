<script setup>
import Link from './Link.vue';
import ThemeToggler from './ThemeToggler.vue';

</script>
<template>
  <div class="flex flex-wrap gap-4 justify-between py-6 items-center">
    <span class=" text-2xl italic font-mono font-thin md:tracking-widest leading-loose
      relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary px-6">
      <span class=" relative">giln.me</span>
    </span>
    <div class="flex flex-wrap gap-4 text-base md:text-xl items-center">
      <Link href="https://github.com/gilnd" :isExternal="true" label="Github"  icon="feather:github"/>
      <ThemeToggler />
    </div>
  </div>
</template>