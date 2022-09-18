<template >
    <div>
        <div class="navbar">
            <img @click="close" src="/icon-close.svg" alt="Close navbar">
            <nav>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
   
</template>
<script setup>
    let props = defineProps(['modelValue']);
    let emits = defineEmits(['update:modelValue']);

    function close(){
        emits('update:modelValue',false);
    }
</script>