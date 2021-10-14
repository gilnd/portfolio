<script setup>
// vue
import { computed, onMounted, ref } from "vue"

// animations
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

// other
import { Icon } from '@iconify/vue';

// define props and emits
const props = defineProps({
  track: { type: Object, required: true },
  delayShow: { type: Number, default: 0 }
})
const emit = defineEmits(['play', 'stop'])

// define data
const isShowing = ref(false)

const playStop = () => {
  if(props.track.isPlaying) {
    emit('stop', props.track )
  } else {
    emit('play', props.track )
  }
}

const percentage = (partialValue, totalValue) => {
  return Math.round((100 * partialValue) / totalValue)
}

onMounted(() => {
  // set isShowing to true after delay
  setTimeout(() => {
    isShowing.value = true
  }, props.delayShow)
})
</script>
<template>
  <TransitionRoot
    as="div"
    :show="isShowing"
    class="rounded-sm transition duration-500 ease-in-out  
    text-gray-800 dark:text-gray-200 cursor-pointer 
    hover:bg-opacity-10 hover:bg-spotify hover:z-50 transform  
    hover:shadow-lg hover:-translate-y-2   
    hover:text-spotify dark:hover:text-spotify "
    enter="transition transform duration-300 ease-out"
    enter-from="translate-x-4 opacity-0"
    enter-to="translate-x-0 opacity-100"
    leave="transition transform duration-300 ease-in"
    leave-from="opacity-100 translate-x-0"
    leave-to="-translate-x-4 opacity-0">
    <div class="px-8 py-4 flex justify-between">
      <!--  -->
      <TransitionChild
        as="div"
        class="flex flex-col"
        enter="transition transform duration-500 ease-out "
        enter-from="translate-x-8 opacity-0"
        enter-to="translate-x-0 opacity-100"
        leave="transition transform duration-500 ease-in"
        leave-from="opacity-100 translate-x-0"
        leave-to="-translate-x-8 opacity-0">
        <span class="opacity-90 font-semibold">{{track.title}}</span>
        <span class="opacity-60">{{track.artist}}</span>
      </TransitionChild>
      <TransitionChild
        as="div"
        class="flex items-center z-50"
        enter="transition transform duration-500 ease-out delay-700"
        enter-from="rotate-90 scale-10 opacity-0"
        enter-to="rotate-0 scale-100 opacity-100"
        leave="transition transform duration-500 ease-in"
        leave-from="opacity-100 translate-x-0"
        leave-to="-translate-x-4 opacity-0">
        <div @click.prevent="playStop" class="hover:text-spotify text-opacity-60 animate transform duration-200">
          <Icon :icon="!track.isPlaying ? 'feather:play' : 'feather:pause'"  class="text-2xl my-auto"/>
        </div>
      
      </TransitionChild>
    <!-- </a> -->
    </div>
    <TransitionRoot
        as="div"
        :show="track.isPlaying"
        class="px-8 pb-4 duration-200 transition-opacity ease-in-out flex gap-4 items-center" 
        enter="transition duration-500 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition duration-500 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
      
        <Icon icon="la:record-vinyl" class="text-2xl my-auto text-spotify animate-spin-vinyl"/>
        <span class="text-xs font-semibold ">
          {{ percentage(track.progress, 30) }}%
        </span>
    </TransitionRoot>
  </TransitionRoot>
</template>