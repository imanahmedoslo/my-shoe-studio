import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const isCartOpen = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const hasProducts = ref<boolean>(false)

  return {
    isCartOpen,
    isLoading,
    hasProducts,
  }
})
