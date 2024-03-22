<template>
  <button @click="cartToggler" class="flex flex-col items-center justify-center font-bold">
      <div style="width: 22px; height: 22px; border-radius: 1.375rem;" class="absolute ml-7 mb-7 pb-4 text-red-500 :mt-0 md:-mt-2 text-center" v-if="cartStore.hasProducts">
        1
      </div>
      <LoadingIcon v-if="cartStore.isLoading && !cartStore.hasProducts" class="w-4 animate-spin absolute ml-9 mb-9 :mt-0 md:-mt-2 text-center opacity-40" />
      <CartFilledIcon v-if="cartStore.hasProducts" class="w-7 h-full opacity-40" />
      <CartIcon v-else class="w-7 h-full opacity-40" />
  </button>
</template>

<script lang="ts" setup>
import CartFilledIcon from '@/assets/icons/cart-filled.svg'
import CartIcon from '@/assets/icons/cart.svg'
import LoadingIcon from '@/assets/icons/loading-spinner.svg'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const cartToggler = () => { cartStore.isCartOpen = true }

</script>
