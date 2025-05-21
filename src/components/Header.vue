<template>
  <div>
    <!-- Barre supérieure grise avec menu hamburger, logo et bouton options -->
    <div class="flex items-center justify-between bg-gray-600 p-1 max-w-full">
      <!-- Menu hamburger à gauche et Logo Klappers jaune -->
      <div class="flex items-center">
        <button class="text-white p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <!-- Logo Klappers jaune -->
        <router-link to="/" class="bg-yellow-400 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 flex items-center justify-center ml-1" style="text-decoration: none;">
          <span class="text-[8px] sm:text-xs md:text-sm font-bold text-black leading-tight text-center">Klappers<br>Radio</span>
        </router-link>
      </div>
     
      <!-- Trait vertical de division -->
      <div class="h-8 sm:h-10 md:h-16 w-0.5 bg-white mx-1 hidden xs:block"></div>
     
      <!-- Logos au centre avec défilement horizontal -->
      <div class="flex-grow overflow-x-auto px-1 max-w-[60%] scrollable-container">
        <div class="flex space-x-2 py-1 justify-start sm:justify-center min-w-max">
          <div v-for="n in 10" :key="n" class="bg-yellow-400 rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center">
            <span class="text-[4px] sm:text-[5px] md:text-[6px] font-bold text-black leading-none text-center">Klappers<br>Radio</span>
          </div>
        </div>
      </div>
     
      <!-- Menu 3 points à droite -->
      <button class="bg-white rounded p-1 ml-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black">
          <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
   
    <!-- Barre inférieure bleu foncé avec le texte "EN DIRECT | KLAPPERS" -->
    <div class="bg-gray-900 text-center py-1 md:py-2">
      <p class="text-xs md:text-sm font-medium">
        <span class="text-white">EN DIRECT</span>
        <span class="text-white mx-1">|</span>
        <span class="text-orange-500">KLAPPERS</span>
      </p>
    </div>
  </div>
</template>

<script setup>
// Ajoutez ici votre logique JavaScript si nécessaire
</script>

<style scoped>
/* Masquer la barre de défilement mais permettre le défilement */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-x: auto;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Styles pour le conteneur des logos défilants */
.scrollable-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Pour un défilement fluide sur iOS */
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory; /* Pour snapper aux éléments */
  padding-bottom: 4px; /* Espace pour le feedback visuel du défilement */
}

.scrollable-container::-webkit-scrollbar {
  height: 2px; /* Barre de défilement fine mais visible */
  background-color: rgba(255, 255, 255, 0.1); /* Barre légèrement visible */
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3); /* Pouce de défilement semi-transparent */
  border-radius: 10px;
}

/* Définition de taille personnalisée pour les très petits écrans */
@media (max-width: 400px) {
  .xs\:block {
    display: block;
  }
}

/* Fix pour assurer la compatibilité sur mobile */
@media (max-width: 360px) {
  /* Réduire davantage les éléments sur les très petits écrans */
  .rounded-full {
    border-radius: 9999px;
  }
}

/* Force l'application des styles Tailwind sur mobile */
@media (max-width: 640px) {
  .max-w-full {
    max-width: 100% !important;
  }
  .max-w-\[60\%\] {
    max-width: 60% !important;
  }
}
</style>