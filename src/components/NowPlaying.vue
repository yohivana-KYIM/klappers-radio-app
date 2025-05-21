<template>
    <div class="relative flex flex-col items-center justify-center text-center py-12 px-4 min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-150px)]">
      <!-- Background Image (Blurred) -->
      <div
        class="absolute inset-0 bg-cover bg-center filter blur-md opacity-30"
        :style="{ backgroundImage: `url(${currentTrack.albumArtUrl || '/background.jpg'})`, backgroundAttachment: 'fixed' }"
      ></div>
  
      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center">
        <img
          :src="currentTrack.albumArtUrl || '/album-art.jpg'"
          alt="Album Art"
          class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl mb-6 border-4 border-klappers-yellow/50"
        />
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-klappers-yellow mb-1">
          {{ currentTrack.title }}
        </h2>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-200">
          {{ currentTrack.artist }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentTrack = ref({
    title: 'Gyal Go Down Low',
    artist: 'JAHYANAI, DJ FASTA, TEAM DAMP',
    albumArtUrl: '/album-art.jpg',
  });
  </script>