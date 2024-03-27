<template>
  <Carousel ref="myCarousel" class="border cursor-grab hover:shadow mb-3 pb-3"
  @mouseenter="stopSliderShow"
  @mouseleave="startSlideShow"
  @click="ForwardManually"
  >
    <Slide v-for="item in LandingPageCarusel" :key="item">
      <img class="carousel__item" :src="item" alt="">
    </Slide>

    <template #addons>
      <Navigation @click="ForwardManually" />
      <Pagination  />
    </template>
  </Carousel>
</template>

<!-- Plugin documentation
https://ismail9k.github.io/vue3-carousel/examples.html -->

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { onMounted, onUnmounted, ref, watch } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import type { log } from 'console';


const props = defineProps<{ 
  LandingPageCarusel: string[]
}>()

const myCarousel = ref()

let intervalId:NodeJS.Timeout | undefined;
let CountSlides = ref(0);
watch(() => myCarousel.value?.data.currentSlide?.value, (newIndex) => {
  CountSlides.value = newIndex ?? 0;
  console.log(newIndex);
}, { immediate: true });

function ForwardManually() {
  console.log(CountSlides.value)
  if(CountSlides.value < props.LandingPageCarusel.length - 1&&CountSlides.value!==0){
        myCarousel.value.next?.();
      }
      else if(CountSlides.value===0){
        myCarousel.value.slideTo?.(props.LandingPageCarusel.length - 1);
        console.log("hey")
      }
      else{
        myCarousel.value.slideTo?.(0);

      }
  
}

// TODO: Fix type error
// TODO: Fiks sånn at hvis man bytter slide selv så stopper auto bytte
function startSlideShow() {
  stopSliderShow();
  intervalId = setInterval(() => {
    if (myCarousel.value && props.LandingPageCarusel) {
      if(CountSlides.value < props.LandingPageCarusel.length - 1){
        myCarousel.value.next?.();
      }
      else{
        myCarousel.value.slideTo?.(0);

      }

      
    }
  }, 3000);
}

onMounted(()=>{
  startSlideShow();
})
function stopSliderShow(){
  if (intervalId) {
    clearInterval(intervalId);
  }
}
onUnmounted(() => {
 stopSliderShow();
});



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
