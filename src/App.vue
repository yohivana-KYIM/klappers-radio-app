<template>
  <div id="app-wrapper" class="flex flex-col min-h-screen bg-gray-900">
    <Header />
  
    <main class="flex-grow pt-[64px] md:pt-[110px] pb-[88px] md:pb-0">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Navigation mobile en bas -->
    <div class="fixed bottom-0 left-0 right-0 z-40">
      <PlayerControls class="md:hidden" />
      <Navigation class="md:hidden" />
    </div>
    
    <!-- Navigation desktop en haut -->
    <Navigation class="hidden md:block" />
  </div>

</template>

<script setup>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import PlayerControls from './components/PlayerControls.vue';

</script>

<style>
/* Styles globaux pour les transitions de page si vous le souhaitez */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ajout d'un padding pour le contenu mobile */
@media (max-width: 767px) {
  main {
    padding-bottom: 180px; /* Espace pour le player + navigation */
  }
}
</style>