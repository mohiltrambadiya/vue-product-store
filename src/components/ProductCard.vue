<script setup>

import { useRouter } from 'vue-router'

let router = useRouter();
defineProps({
    product: {
        type: Object,
        required: true
    },
})
</script>

<template>
    <div class="col">
        <div class="card product-card-bg">
            <img :src="product.images[0]" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <dl> 
                    <dt>Price:</dt> 
                    <dd>{{ product.price }} $</dd> 
                </dl>
                <p class="card-text">{{ product.description }}</p>
                <button type="button" @click="router.push({name: 'ProductDetail', params:{id:product.id}})"  class="btn store-btn">Click for detail!</button>
            </div>
        </div>
    </div>
</template>