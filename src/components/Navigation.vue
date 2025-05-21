<template>
  <nav class="bg-klappers-dark/80 backdrop-blur-sm p-2 shadow-md sticky top-[64px] z-40">
    <div class="container mx-auto">
      <div class="flex justify-center items-center space-x-2 sm:space-x-4">
        <nav-links />
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavLinks from './NavigationLinks.vue';
</script>

<style scoped>
@media (max-width: 767px) {
  nav {
    position: relative;
    background-color: rgba(17, 24, 39, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  :deep(.nav-link) {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
  }
}
</style>