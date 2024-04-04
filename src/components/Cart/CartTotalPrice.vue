<template>
  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
    <p v-if="!isShippingPrice" class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    <div class="flex justify-between font-medium text-base text-gray-900 my-3">
      <p>Shipping</p>
      <p>100kr</p>
    </div>
    <div class="flex justify-between font-medium text-xl text-gray-900 my-3 border-b border-black pb-3">
      <p>Total</p>
      <p>1399kr</p>
    </div>
    <div v-if="!hideButtons" class="mt-6">
      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
    </div>
    <div v-if="!hideButtons" class="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        or{{ ' ' }}
        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="cartStore.isCartOpen = false">
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

defineProps<{ 
  hideButtons?: boolean,
  isShippingPrice?: boolean
}>()

</script>