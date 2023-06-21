<template>
  <div class="cart-view">
    <h3>Cart</h3>
    <div class="cart-list">
      <div v-for="(item, index) in items" :key="index" class="cart-item">
        <img class="image" :src="item.image" alt="Item image" />
        <div class="details">
          <p>{{ item.title }}</p>
          <p>
            ${{ item.price }} x {{ item.quantity }}
            <span class="total"
              >${{ parseFloat(item.price) * item.quantity }}</span
            >
          </p>
        </div>
        <img
          @click="remove(item)"
          class="remove"
          src="/icon-delete.svg"
          alt=""
        />
      </div>
      <button v-if="items.length > 0" class="button">Checkout</button>
      <p v-else>Your cart is empty</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { cartStore } from "../store";

const store = cartStore();

let items = ref([]);

function syncStore() {
  store.items.forEach((obj) => {
    let newObj = {};
    for (var key in obj.value) {
      newObj[key] = obj.value[key];
    }
    items.value.push(newObj);
  });
}

syncStore();

function remove(item) {
  store.removeItem(item);
  items.value = [];
  syncStore();
}
</script>
