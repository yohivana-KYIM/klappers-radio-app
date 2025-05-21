<template>
  <div class="podcasts-page">
    <NowPlaying />
    <PlayerControls class="hidden md:block md:mt-[-60px] md:mb-8 relative z-20" />
    <div class="container mx-auto px-4 py-8 relative z-10">
      <h2 class="text-2xl font-bold text-klappers-yellow mb-6">Nos Podcasts</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
        <div class="bg-white/10 p-6 rounded-lg shadow-xl">
          <h3 class="text-xl font-semibold text-klappers-yellow mb-4">Podcast Title</h3>
          <p class="text-gray-300 mb-4">Description of the podcast episode...</p>
          <button class="bg-klappers-yellow text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
            Écouter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NowPlaying from '../components/NowPlaying.vue';
import PlayerControls from '../components/PlayerControls.vue';
</script> 