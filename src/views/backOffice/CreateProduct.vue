<template>
  <Content>
    <div>
      <h1>Create Product</h1>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description"><br><br>
        <label for="price">Price:</label>
        <input type="text" id="price" name="price"><br><br>
        <label for="options">Options:</label>
        <input type="text" id="options" name="options"><br><br>
        <label for="imageSrc">Image Source:</label>
        <input type="text" id="imageSrc" name="imageSrc"><br><br>
        <label for="imageAlt">Image Alt:</label>
        <input type="text" id="imageAlt" name="imageAlt"><br><br>
        <input type="submit" value="Submit">
      </form>
    </div>
  </Content>

</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import { ref } from 'vue'

</script>