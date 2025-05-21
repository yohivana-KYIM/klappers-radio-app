<template>
  <div class="info-page">
    <NowPlaying />
    <PlayerControls class="hidden md:block md:mt-[-60px] md:mb-8 relative z-20" />
    <div class="container mx-auto px-4 py-8 relative z-10">
      <h2 class="text-2xl font-bold text-klappers-yellow mb-6">À Propos de KN Digital Agency</h2>
      <div class="bg-white/10 p-6 rounded-lg shadow-xl">
        <div class="space-y-6">
          <section>
            <h3 class="text-xl font-semibold text-klappers-yellow mb-3">Notre Histoire</h3>
            <p class="text-gray-300">KN Digital Agency est votre station de radio en ligne, offrant une expérience musicale unique et des contenus exclusifs.</p>
          </section>
          
          <section>
            <h3 class="text-xl font-semibold text-klappers-yellow mb-3">Notre Mission</h3>
            <p class="text-gray-300">Nous nous engageons à fournir une programmation de qualité et à créer une communauté autour de la musique et du divertissement.</p>
          </section>

          <section>
            <h3 class="text-xl font-semibold text-klappers-yellow mb-3">Nos Programmes</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Émissions musicales</li>
              <li>Podcasts exclusifs</li>
              <li>Actualités et interviews</li>
              <li>Événements spéciaux</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NowPlaying from '../components/NowPlaying.vue';
import PlayerControls from '../components/PlayerControls.vue';
</script> 