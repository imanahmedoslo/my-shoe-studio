<template>
  <div class="bg-gray-100">
    <div class="mx-auto bg-white border-x  max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isBackgroundWhite?: boolean
}>()
</script>