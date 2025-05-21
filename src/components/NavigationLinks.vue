<template>
   
    
    <router-link @click="emitClick" to="/actus" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
      </svg>
      Actus
    </router-link>
    <router-link @click="emitClick" to="/podcasts" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
      </svg>
      Podcasts
    </router-link>
    
    <router-link @click="emitClick" to="/direct" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
      </svg>
      Direct
    </router-link>
   
    <router-link @click="emitClick" to="/info" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
      </svg>
      Info
    </router-link>
    
    <router-link @click="emitClick" to="/contact" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      Contact
    </router-link>
  </template>
  
  <script setup>
  const emit = defineEmits(['link-clicked']);
  const emitClick = () => {
    emit('link-clicked');
  }
  </script>
  
  <style scoped>
  .nav-link {
    @apply px-3 py-2 text-sm font-medium text-gray-300 hover:bg-klappers-yellow hover:text-klappers-dark rounded-md w-full md:w-auto text-center md:text-left;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (min-width: 768px) {
    .nav-link {
      justify-content: flex-start;
    }
  }
  
  .router-link-exact-active {
    @apply bg-klappers-yellow text-klappers-dark;
  }
  
  /* Ajout d'un padding en bas pour la navigation sur mobile */
  @media (max-width: 767px) {
    :deep(nav) {
      padding-bottom: 120px; /* Espace pour le player */
    }
  }
  </style>