<template>
  <div class="images">
    <img class="cover" src="/image-product-1.jpg" alt="Product Image" />
    <div class="thumbnails">
      <img
        class="thumbnail active"
        v-for="index in 4"
        :key="'image' + index"
        :src="`/image-product-${index}-thumbnail.jpg`"
        :alt="`Image ${index}`"
      />
    </div>
  </div>
</template>
<script setup></script>
