<template>
  <div class="images">
    <div class="image-carousel">
      <img
        class="cover"
        :src="`/image-product-${imageIndex}.jpg`"
        alt="Product Image"
        @click="viewImage = true"
      />
      <img
        class="previous"
        src="/icon-previous.svg"
        alt="Previous Image"
        @click="selectImage(imageIndex - 1)"
      />
      <img
        class="next"
        src="/icon-next.svg"
        alt="Next Image"
        @click="selectImage(imageIndex + 1)"
      />
    </div>
    <div class="thumbnails">
      <img
        class="thumbnail active"
        v-for="index in 4"
        :key="'image' + index"
        :src="`/image-product-${index}-thumbnail.jpg`"
        :alt="`Image ${index}`"
        @click="imageIndex = index"
      />
    </div>
  </div>
  <ImageView :initial="imageIndex" v-model="viewImage" v-if="viewImage" />
</template>
<script setup>
import { ref } from "vue";
import ImageView from "./ImageView.vue";

let viewImage = ref(false);
let imageIndex = ref(1);

function selectImage(index) {
  imageIndex.value = index < 1 ? 4 : index > 4 ? 1 : index;
}
</script>
