<template>
  <div class="details">
    <p class="primary bold">SNEAKER COMPANY</p>
    <h1 class="title">Fall Limited Edition Sneakers</h1>
    <p class="subtitle">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </p>
    <div class="price-tag">
      <p><span class="xl bold">$125.00</span><span class="label">50%</span></p>
      <p class="lg faded strike">$250.00</p>
    </div>

    <div class="collapsing-col">
      <div class="item-counter card">
        <img src="/icon-minus.svg" alt="Subtract" />
        <p>3</p>
        <img src="/icon-plus.svg" alt="Add" />
      </div>
      <button class="button">
        <img class="icon" src="/icon-cart.svg" alt="Cart icon" />
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script setup></script>
