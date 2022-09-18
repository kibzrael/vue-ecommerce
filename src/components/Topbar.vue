<template>
  <div class="topbar">
    <img class="menu" @click="openNav" src="/icon-menu.svg" alt="Menu" />
    <img class="logo" src="/logo.svg" alt="Logo" />
    <div class="spacer"></div>
    <nav>
      <ul>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="cart" @click="toggleCart">
      <img class="cart-icon" src="/icon-cart.svg" alt="Cart" />
      <p class="counter">3</p>
    </div>
    <img class="avatar" src="/image-avatar.png" alt="Avatar" />
    <CartView v-if="cartOpen"/>
  </div>
  <Navbar v-model="navOpen" v-if="navOpen" />
</template>


<script setup>
import { ref } from 'vue';
import CartView from './CartView.vue';
import Navbar from './Navbar.vue';
let cartOpen=ref(false)

function toggleCart() {
  cartOpen.value = !cartOpen.value;
}
let navOpen=ref(false)

function openNav() {
  navOpen.value = true;
}
</script>
