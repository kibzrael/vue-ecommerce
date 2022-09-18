<template >
    <div class="cart-view">
        <h3>Cart</h3>
        <div class="cart-list">
            <div v-for="(item, index) in items" :key="index" class="cart-item">
                <img class="image" :src="item.image" alt="Item image">
                <div class="details">
                    <p>{{item.title}}</p>
                <p>${{item.price}} x {{item.quantity}} <span class="total">${{item.price*item.quantity}}</span></p>
                </div>
                <img class="remove" src="/icon-delete.svg" alt="">
                
            </div>
            <button v-if="items.length>0" class="button">Checkout</button>
            <p v-else>Your cart is empty</p>
        </div>
    </div>
</template>

<script setup>

    let items = [
        {
            title:'Fall Limited Edition Sneakers',
            image:'/image-product-1.jpg',
            price:125,
            quantity:3
        }
    ];

</script>