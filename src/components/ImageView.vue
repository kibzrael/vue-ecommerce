<template>
  <div class="image-view">
    <img
      class="close"
      src="/icon-close.svg"
      alt="Close View"
      @click="closeView"
    />
    <div class="image-carousel">
      <img class="image" :src="currentImage" alt="Current Image" />
      <div class="previous" @click="selectImage(currentIndex - 1)">
        <img src="/icon-previous.svg" alt="Previous Image" />
      </div>
      <div class="next" @click="selectImage(currentIndex + 1)">
        <img src="/icon-next.svg" alt="Next Image" />
      </div>
    </div>
    <div class="thumbnails">
      <img
        v-for="index in 4"
        :key="index"
        class="thumbnail"
        :src="`image-product-${index}-thumbnail.jpg`"
        :alt="`Thumbnail ${index}`"
        @click="selectImage(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let props = defineProps(["initial", "modelValue"]);
let emits = defineEmits(["update:modelValue"]);

let currentIndex = ref(props.initial);
let currentImage = ref(`/image-product-${props.initial}.jpg`);

function closeView() {
  emits("update:modelValue", false);
}

function selectImage(index) {
  let selectedIndex = index < 1 ? 4 : index > 4 ? 1 : index;
  currentImage.value = `/image-product-${selectedIndex}.jpg`;
  currentIndex.value = selectedIndex;
}
</script>
