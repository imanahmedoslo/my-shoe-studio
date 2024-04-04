<template>
  <!-- TODO change id to artical number -->
  <router-link v-for="product in products" :to="`/product/${product.id}`" :key="product.id" class="group hover:shadow-2xl hover:border-gray-400 bo duration-300 relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div class="aspect-h-4 aspect-w-3 bg-gradient-to-t from-gray-100 sm:aspect-none  sm:h-96">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
    </div>
    <div class="flex flex-1 flex-col space-y-2 p-4">
      <h3 class="text-sm font-medium text-gray-900">
        <a :href="product.href">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </a>
      </h3>
      <p class="text-sm text-gray-500">{{ product.description }}</p>
      <div class="flex flex-1 flex-col justify-end">
        <p class="text-sm italic text-gray-500">{{ product.options }}</p>
        <p class="text-base font-medium text-gray-900">{{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{ 
  products: { id: number, name: string, href: string, price: string, description: string, options: string, imageSrc: string, imageAlt: string}[]

}>()





</script>