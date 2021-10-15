

<script setup>
import { computed, ref, } from 'vue'
import { useStore } from 'vuex'
import { Icon } from '@iconify/vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import useEmitter from '@/composables/useEmitter'

const emitter = useEmitter()
const store = useStore()
const theme = computed(() => store.getters.theme);

const enabledDarkMode = computed({
  get: () => theme.value === 'dark',
  set: () => {
    store.dispatch('toggleTheme')
  }
})

const toggle = () => {
  enabledDarkMode.value = !enabledDarkMode.value; 
  emitter.emit('theme:change', enabledDarkMode.value ? 'dark' : 'light')
}

</script>
<template>
  <SwitchGroup>
    <div class="flex items-center">
      <Switch
        v-model="enabledDarkMode"
        :class='enabledDarkMode ? "bg-gray-600" : "bg-gray-200"'
        class="relative inline-flex items-center h-8 transition-colors rounded-full w-14
          focus:outline-none cursor-pointer ">
        <span
          :class='enabledDarkMode ? "translate-x-7" : "translate-x-1"'
          class=" w-6 h-6 transition-transform transform bg-white rounded-full
            flex items-center justify-center">
          <Icon 
            class="text-lg text-gray-800" 
            :icon="enabledDarkMode ? 'heroicons-outline:moon': 'heroicons-outline:sun'"/>
        </span>
      </Switch>
    </div>
  </SwitchGroup>
</template>