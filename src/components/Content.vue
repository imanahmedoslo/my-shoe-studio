<template>
  <div class="flex justify-center border" :class="[isBackgroundWhite ? '' : 'bg-gray-100']">
    <div class="  h-screen w-[1440px] bg-white border-x">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isBackgroundWhite?: boolean
}>()
</script>