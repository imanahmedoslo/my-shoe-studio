<template>
  <Carousel ref="myCarousel" class="border cursor-grab hover:shadow mb-3 pb-3">
    <Slide v-for="item in LandingPageCarusel" :key="item">
      <img class="carousel__item" :src="item" alt="">
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<!-- Plugin documentation
https://ismail9k.github.io/vue3-carousel/examples.html -->

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps<{ 
  LandingPageCarusel: string[]
}>()

const myCarousel = ref(null)
let countSlides = 0

// TODO: Fix type error
// TODO: Fiks sånn at hvis man bytter slide selv så stopper auto bytte
setInterval(() => {
  countSlides++
  if (countSlides < props.LandingPageCarusel.length) {
    myCarousel.value.next()
    
  } else {
    countSlides = 0
    myCarousel.value.slideTo(0)
  }  
}, 3000);



</script>

<style>
.carousel__item {
  /* TODO: Fiks Mobile høyde */
  height: 600px;
  width: 100%;
  object-fit: contain;
  /* TODO: Fiks denne fargen til noe bedre */
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  /* border: 1px solid var(--vc-clr-primary); */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
}
</style>
