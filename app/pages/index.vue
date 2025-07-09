<script setup>
import { NuxtLink } from '#components';

const { data } = await useFetch('https://dummyjson.com/recipes?limit=12');
console.log(data)
</script>

<template>
  <main>
    <section class="bg-[#f1f1f1] flex items-center justify-center">
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="order-2 lg:order-1 flex-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <button class="px-4 py-2 text-white self-start bg-yellow-400 rounded-md text-lg cursor-pointer">
            Browse Recipes
          </button>
        </div>
        <div class="order-1 lg:order-2">
          <NuxtImg src="/nuxt-course-hero.png" alt="" />
        </div>
      </div>
    </section>
    <div class="flex items-center justify-center">
      <section class="py-20 container ">
        <h2 class="text-3xl lg:text-5xl mb-2 text-center lg:text-left">Discover, Create, Share</h2>
        <p class="text-lg lg:text-xl mb-8 text-center lg:text-left">Check out our most popular recipes!</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          <div v-for="recipe in data.recipes" :key="recipe.id" class="flex flex-col shadow rounded-md">
            <NuxtImg :src="recipe.image" :alt="recipe.name" class="rounded-t-md" />
            <div class="flex flex-col py-6 px-4 flex-1">
              <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
              <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                <div class="flex items-center gap-1">
                  <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                  <span>{{ recipe.cookTimeMinutes || 'N/A' }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="mdi:fire" style="color: #f79f1a" />
                  <span>{{ recipe.caloriesPerServing || 'N/A' }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="mdi:star" style="color: #f79f1a" />
                  <span>{{ recipe.rating || 'N/A' }} ({{ recipe.reviewCount || 0 }})</span>
                </div>
              </div>
              <NuxtLink 
              :to="`/recipes/${recipe.id}`"
                class="px-4 py-2 text-white self-start bg-yellow-400 rounded-md text-base lg:text-lg cursor-pointer">
                View
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>


</script>
