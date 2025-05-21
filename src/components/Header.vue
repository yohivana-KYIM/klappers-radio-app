<template>
  <div>
    <!-- Barre supérieure grise avec menu hamburger, logo et bouton options -->
    <div class="flex items-center justify-between bg-gray-600 p-2">
      <!-- Menu hamburger à gauche et Logo Klappers jaune -->
      <div class="flex items-center">
        <button class="text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <!-- Logo Klappers jaune -->
        <router-link to="/" class="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center ml-2" style="text-decoration: none;">
          <span class="text-sm font-bold text-black leading-tight text-center">Klappers<br>Radio</span>
        </router-link>
      </div>
      
      <!-- Trait vertical de division -->
      <div class="h-16 w-0.5 bg-white mx-1"></div>
      
      <!-- Logos au centre -->
      <div class="flex space-x-1 overflow-hidden flex-grow justify-center">
        <div v-for="n in 10" :key="n" class="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
          <span class="text-[6px] font-bold text-black leading-none text-center">Klappers<br>Radio</span>
        </div>
      </div>
      
      <!-- Menu 3 points à droite -->
      <button class="bg-white rounded p-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-black">
          <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    
    <!-- Barre inférieure bleu foncé avec le texte "EN DIRECT | KLAPPERS" -->
    <div class="bg-gray-900 text-center py-2">
      <p class="text-sm font-medium">
        <span class="text-white">EN DIRECT</span>
        <span class="text-white mx-1">|</span>
        <span class="text-orange-500">KLAPPERS</span>
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>