<template>
  <div class="details">
    <p class="primary bold">SNEAKER COMPANY</p>
    <h1 class="title">{{ item.title }}</h1>
    <p class="subtitle">
      {{ item.subtitle }}
    </p>
    <div class="price-tag">
      <p>
        <span class="xl bold">${{ item.price }}</span
        ><span class="label">{{ item.offer }}</span>
      </p>
      <p class="lg faded strike">${{ item.previous }}</p>
    </div>

    <div class="collapsing-col">
      <div class="item-counter card">
        <img
          src="/icon-minus.svg"
          @click="
            if (item.quantity > 1) {
              item.quantity--;
            }
          "
          alt="Subtract"
        />
        <p>{{ item.quantity }}</p>
        <img src="/icon-plus.svg" @click="item.quantity++" alt="Add" />
      </div>
      <button @click="addToCart" class="button">
        <img class="icon" src="/icon-cart.svg" alt="Cart icon" />
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { cartStore } from "../store";

let item = ref({
  id: 1,
  title: "Fall Limited Edition Sneakers",
  image: "/image-product-1.jpg",
  subtitle:
    " These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\’ll withstand everything the weather can offer.",
  price: "125.00",
  offer: "50%",
  previous: "250.00",
  quantity: 1,
});
const store = cartStore();

function addToCart() {
  store.addItem(item);
}
</script>
