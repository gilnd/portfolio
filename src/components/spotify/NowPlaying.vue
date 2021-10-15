<script setup>
import { onMounted, ref, reactive } from 'vue'
import { getNowPlaying } from '@/modules/spotify'
import { Icon } from '@iconify/vue';

// animations
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const song = reactive({})
const isPlaying = ref(false)
const isShowing = ref(false)

const loading = ref(false)
const hover = ref(false)

onMounted(async () => {
  try {
    loading.value = true  
    await fetchSong()
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false
  }
})

const fetchSong = async () => {
  try {
    isShowing.value = false
    const response = await getNowPlaying()
    if (response.status === 204 || response.status > 400) {
      isPlaying.value = false
      return false;
    }
    const res = await response.json()
    if(res){
      isPlaying.value = res.is_playing
      song.title = res.item.name
      song.artist = res.item.artists.map((_artist) => _artist.name).join(', ')
      song.album = res.item.album.name
      song.albumImageUrl = res.item.album.images[0].url
      song.songUrl = res.item.external_urls.spotify
      song.duration = res.item.duration_ms
      song.progress = res.progress_ms
    }
  } catch (error){
    console.log(error);
  } finally {
    isShowing.value = true
    if(isPlaying.value){
      // TODO: fetch song again when it ends
      // note this is not a very good way to do this becouse the user could have changed the song
      setTimeout(() => isShowing.value = false, song.duration - song.progress)
    }
  }
}

</script>
<template>
  <div v-if="loading" class="flex space-x-4 my-4">
    <Icon icon="feather:loader" class="text-3xl my-auto animate-spin" />
    <span class="text-xl my-auto">Checking Spotify...</span>
  </div>
  <!--  bg-gradient-to-r hover:from-pink-500 hover:to-primary -->
  <TransitionRoot
    as="div"
    :show="isShowing"
    enter="transition transform duration-300 ease-out"
    enter-from="translate-x-4 opacity-0"
    enter-to="translate-x-0 opacity-100"
    leave="transition transform duration-10 ease-in"
    leave-from="opacity-100 translate-x-0"
    leave-to="-translate-x-4 opacity-0"
    @after-leave="fetchSong()">
    <div v-if="!loading" class="p-4 rounded-lg"
      :class="[isPlaying ? `transition duration-200 transform 
      hover:scale-105 hover:bg-black hover:bg-opacity-5
      hover:shadow-lg hover:z-50 cursor-pointer` : '']">
      <a v-if="isPlaying" :href="song.songUrl">
        <div class="flex justify-between">
          <div class="flex space-x-4 ">
            <div class="relative">
              <TransitionChild
                as="div"
                enter="transition transform duration-500 ease-out delay-300"
                enter-from=" scale-10 translate-x-4 opacity-0"
                enter-to=" scale-100 translate-x-0 opacity-100"
                leave="transition transform duration-50 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <img :src="song.albumImageUrl" class="w-12 h-12 rounded-lg filter drop-shadow-lg object-cover">
              </TransitionChild>

              <TransitionChild
                as="div"
                class="absolute -top-2 -left-2 bg-black rounded-full filter drop-shadow-lg"
                enter="transition transform duration-500 ease-out delay-500"
                enter-from="rotate-180 scale-10 opacity-0"
                enter-to="rotate-0 scale-100 opacity-100"
                leave="transition transform duration-50 ease-in"
                leave-from="rotate-0 opacity-100"
                leave-to="rotate-180 opacity-0">
                <Icon icon="ci:spotify" class="text-2xl my-auto text-spotify "/>
              </TransitionChild>
            </div>
            <TransitionChild
              as="div"
              class="flex flex-col my-auto"
              enter="transition transform duration-300 ease-out delay-50"
              enter-from="translate-x-4 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition transform duration-50 ease-in"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-2 opacity-0">
                <span class="text-spotify font-semibold text-lg">{{song.title}}</span>
                <span class="text-gray-600 dark:text-gray-400 text-md">{{song.artist}} - {{song.album}}</span>
            </TransitionChild>
          </div>
        </div>
      </a>
      <div v-else class="flex space-x-4">
        <Icon icon="ci:spotify" class="text-3xl my-auto text-spotify filter drop-shadow-lg"/>
        <span class="text-xl my-auto text-gray-800 dark:text-gray-50 text-opacity-60">Not Playing </span>
      </div>
    </div>
  </TransitionRoot>
</template>