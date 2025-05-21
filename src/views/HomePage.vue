<template>
    <div class="home-page">
      <NowPlaying />
      <PlayerControls class="hidden md:block md:mt-[-60px] md:mb-8 relative z-20" />
      
      <!-- Navigation Links pour mobile -->
      <div class="md:hidden mb-4">
        <nav-links />
      </div>
      
      <!-- Section Publicité avec rotation automatique -->
      <div class="container mx-auto px-4 py-4 relative z-10">
        <div class="bg-white/10 p-4 rounded-lg shadow-xl text-center max-w-2xl mx-auto">
          <h3 class="text-lg font-semibold text-klappers-yellow mb-3">Publicité</h3>
          
          <!-- Conteneur des annonces -->
          <div class="relative h-40 md:h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <!-- Annonces - images chargées depuis le dossier public -->
            <img 
              v-for="(ad, index) in ads" 
              :key="index"
              :src="'/ads/' + ad.image"
              :alt="ad.alt"
              class="absolute w-auto h-auto max-w-[90%] max-h-[90%] object-contain transition-opacity duration-1000"
              :class="{ 'opacity-0': currentAd !== index }"
            />
          </div>
          
          <!-- Navigation entre annonces -->
          <div class="flex justify-center mt-3 space-x-2">
            <button 
              v-for="(ad, index) in ads"
              :key="'nav-' + index"
              @click="currentAd = index"
              class="w-2 h-2 rounded-full"
              :class="currentAd === index ? 'bg-klappers-yellow' : 'bg-gray-500'"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import NowPlaying from '../components/NowPlaying.vue';
  import PlayerControls from '../components/PlayerControls.vue';
  import NavLinks from '../components/NavigationLinks.vue';
  
  const ads = [
    { image: 'annonce.jpeg', alt: 'Publicité 1' },
    { image: 'an.jpeg', alt: 'Publicité 2' },
    { image: 'an.jpeg', alt: 'Publicité 3' },
  ];
  
  const currentAd = ref(0);
  let intervalId = null;
  
  // Rotation automatique des annonces
  const startRotation = () => {
    intervalId = setInterval(() => {
      currentAd.value = (currentAd.value + 1) % ads.length;
    }, 5000); // Change toutes les 5 secondes
  };
  
  onMounted(() => {
    startRotation();
  });
  
  onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
  });
  </script>
  
  <style scoped>
  /* Animation fluide pour le changement d'annonce */
  .transition-opacity {
    transition-property: opacity;
  }

  /* Styles pour la navigation sur mobile */
  @media (max-width: 767px) {
    .home-page {
      padding-bottom: 180px; /* Espace pour le player et la navigation en bas */
    }
  }
  </style>