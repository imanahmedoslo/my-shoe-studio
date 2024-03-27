<template>
  <div class="bg-gray-100">
    <div class="mx-auto bg-white border-x  max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <ImageSlider :LandingPageCarusel="LandingPageCarusel"/>
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <ProductCard :products="products" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageSlider from '@/components/ImageSlider/imageSlider.vue'
import ProductCard from '@/components/PLP/productCard.vue'

const LandingPageCarusel = [
  'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-nike-v1-f85d403c-908d-42be-acd5-ef60bef6fe94.jpg?w=1500&h=900&crop=1',
  'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F10%2Fnike-air-force-1-low-premium-what-the-ny-new-york-city-1.jpg?cbr=1&q=90',
  'https://freakyshoes.com/cdn/shop/articles/nike836_180.jpg?v=1704314796&width=1100',
  'https://w0.peakpx.com/wallpaper/888/321/HD-wallpaper-nike-air-force-nike-shoes.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg',
]





// TODO use content component at the top of the html
const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]
</script>