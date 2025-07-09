<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <header class="py-4 border-b">
    <nav class="flex items-center justify-between px-4 md:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <NuxtImg src="/icon-green.png" width="40" format="webp" alt="Logo" />
        <span class="text-2xl font-bold">Nuxtcipes</span>
      </NuxtLink>

      <!-- Menu escritorio -->
      <ul class="hidden md:flex items-center gap-6 text-lg font-semibold capitalize">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>

      <!-- Boton hamburguesa movil -->
      <button
        class="md:hidden"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition duration-300 transform rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Menu hamburguesa movil -->
    <div
      class="overflow-hidden transition-all duration-300 md:hidden"
      :class="isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'"
    >
      <ul class="flex flex-col gap-4 px-4 pt-4 pb-6 text-lg font-semibold capitalize bg-white">
        <li><NuxtLink to="/" @click="isOpen = false">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false">About</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>
