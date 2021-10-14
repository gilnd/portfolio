<script setup>
import { getTopTracks } from '@/modules/spotify'
import { onMounted, ref, reactive } from 'vue'
import { Icon } from '@iconify/vue';

// animations
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

import Track from './Track.vue'
const loading = ref(false)
const tracks = reactive([])


const sound = ref({})

const play = (track) => {  
  if (sound.value instanceof Audio && !sound.value.paused) {
    stopCurrent()
  }
  sound.value = new Audio(track.previewUrl)
  sound.value.play()
  track.isPlaying = true
  track.progress = 0

  sound.value.addEventListener('timeupdate', 
    () => track.progress = sound.value.currentTime.toFixed() 
  )
  sound.value.onended = () => {
    track.isPlaying = false
    track.progress = 0  
  }
}

const getPlayingTrack = () => {
  return tracks.filter(t => t.isPlaying)[0]
}

const stopCurrent = () => {
  sound.value.pause()
  sound.value.currentTime = 0
  const playingTrack = getPlayingTrack()
  if (playingTrack) {
    playingTrack.isPlaying = false
    playingTrack.progress = 0
  }
}

const stop = (track) => {
  sound.value.pause()
  sound.value.currentTime = 0
  track.isPlaying = false
  track.progress = 0
}

// loading tracks
onMounted(async () => {
  loading.value = true
  const response = await getTopTracks();
  const { items } = await response.json();
  Object.assign(tracks, items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    previewUrl: track.preview_url,
    isPlaying: false,
    progress: 0
  })))
  loading.value = false
})


</script>
<template>
  <TransitionRoot
    as="div"
    :show="loading"
    enter="transition transform duration-300 ease-out"
    enter-from="translate-x-4 opacity-0"
    enter-to="translate-x-0 opacity-100"
    leave="transition transform duration-300 ease-in"
    leave-from="opacity-100 translate-x-0"
    leave-to="-translate-x-4 opacity-0">
  <div v-if="loading" class="flex space-x-4 my-4">
    <Icon icon="feather:loader" class="text-3xl my-auto animate-spin" />
    <span class="text-base md:text-xl my-auto">Getting Spotify Tracks...</span>
  </div>
  </TransitionRoot>
  <div v-if="!loading && tracks" class="flex flex-col rounded-lg space-y-6  ">
    <div class="flex space-x-4">
      <Icon icon="ci:spotify" class="text-base md:text-3xl my-auto text-spotify filter drop-shadow-lg"/>
      <span class="text-base md:text-xl my-auto opacity-80">Current top tracks on <span class="text-spotify font-semibold">Spotify</span> (●'◡'●)</span>
    </div>
    <div class="flex flex-col divide-y-2 divide-spotify divide-opacity-10">
      <Track 
        v-for="(track, index) of tracks" :key="index" 
        :track="track" :delayShow="index * 50" 
        @play="play" @stop="stop" />
    </div>
  </div>
</template>