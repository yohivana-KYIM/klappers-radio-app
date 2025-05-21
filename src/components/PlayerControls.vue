<template>
  <div class="bg-gray-800/90 p-3 w-full shadow-t-lg md:relative md:bg-transparent md:p-0 md:shadow-none">
    <div class="container mx-auto flex flex-col items-center">
      <!-- Indicateurs de qualité audio dans des ronds -->
      <div class="flex items-center justify-center space-x-2 sm:space-x-3 mt-2 sm:mt-3">
        <button
          class="w-12 h-12 bg-black rounded-full flex items-center justify-center"
          @click="changeQuality('320')"
        >
          <div class="text-xs text-white font-medium text-center">
            320
            <br />
            kbps
          </div>
        </button>
        
        <button
          class="w-12 h-12 bg-black rounded-full flex items-center justify-center"
          @click="changeQuality('96')"
        >
          <div class="text-xs text-white font-medium text-center">
            96
            <br />
            kbps
          </div>
        </button>
        
        <!-- Bouton principal avec la qualité actuelle -->
        <div class="flex flex-col items-center justify-center">
          <button
            class="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center relative shadow-lg"
            @click="togglePlayPause"
            style="box-shadow: 0 4px 24px rgba(0,0,0,0.15);"
          >
            <span class="absolute inset-0 flex items-center justify-center">
              <span class="w-14 h-14 bg-black rounded-full flex flex-col items-center justify-center px-2 py-1">
                <span class="text-white font-bold text-base leading-none mb-1 mt-1" style="margin-bottom:0.25rem; margin-top:0.15rem;">{{ currentQuality }}</span>
                <span class="flex items-center justify-center my-1">
                  <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </span>
                <span class="text-white font-bold text-xs leading-none mt-1 mb-1" style="margin-top:0.15rem; margin-bottom:0.15rem;">kbps</span>
              </span>
            </span>
          </button>
        </div>
        
        <button
          class="w-12 h-12 bg-black rounded-full flex items-center justify-center"
          @click="changeQuality('64')"
        >
          <div class="text-xs text-white font-medium text-center">
            64
            <br />
            kbps
          </div>
        </button>
        
        <button
          class="w-12 h-12 bg-black rounded-full flex items-center justify-center"
          @click="changeQuality('32')"
        >
          <div class="text-xs text-white font-medium text-center">
            32
            <br />
            kbps
          </div>
        </button>
      </div>
   
      <!-- Barre de progression (mobile seulement) -->
      <div class="mt-2 h-1 bg-gray-600 rounded-full w-3/4 mx-auto md:hidden">
        <div class="h-1 bg-yellow-400 rounded-full" style="width: 60%;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentQuality = ref('128');
const isPlaying = ref(false);

const togglePlayPause = () => {
  isPlaying.value = !isPlaying.value;
};

const changeQuality = (quality) => {
  currentQuality.value = quality;
};
</script>

<style scoped>
.control-btn {
  @apply text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10;
}

@media (max-width: 767px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  /* Ajustement de la taille des boutons sur mobile */
  button {
    transform: scale(0.9);
  }

  /* Ajustement de l'espacement sur mobile */
  .space-x-2 > * + * {
    margin-left: 0.25rem;
  }
}
</style>