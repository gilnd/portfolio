

<script setup>
import { computed, ref, } from 'vue'
import { useStore } from 'vuex'
import { Icon } from '@iconify/vue';
import useEmitter from '@/composables/useEmitter'

const emitter = useEmitter()
const store = useStore()
const theme = computed(() => store.getters.theme);

const isShowing = ref(true)
const enabledDarkMode = computed({
  get: () => theme.value === 'dark',
  set: () => {
    store.dispatch('toggleTheme')
    isShowing.value=true
  }
})

const toggle = () => {
  enabledDarkMode.value = !enabledDarkMode.value; 
  isShowing.value = !isShowing.value
  emitter.emit('theme:change', enabledDarkMode.value ? 'dark' : 'light')
}

</script>
<template>
  <Transition name="fade">
    <div class="flex">
      <Icon 
        class="text-2xl transition duration-200 my-auto cursor-pointer  hover:text-primary" 
        @click="toggle()"
        :icon="enabledDarkMode ? 'heroicons-outline:sun': 'heroicons-outline:moon'"
      />
    </div>
  </Transition>
</template>