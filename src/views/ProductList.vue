<script setup>
import axios from 'axios'
import { onMounted, ref, computed, watch, watchEffect} from 'vue'
import ProductCard from '../components/ProductCard.vue'

let productData = ref({});
let currentPage = ref(0);
let searchStr = ref("");

async function getProductData() {

  let apiUrl = `https://api.escuelajs.co/api/v1/products?offset=${currentPage.value}&limit=8`
  if(searchStr.value !== "") {
    apiUrl = apiUrl + `&title=${searchStr.value}`
  }
  
  await axios.get(apiUrl).then((res) => {
    if(res.status == 200) {
      productData.value = res.data;
    }
  }).catch((error) => {
    console.log(error); 
  })
}

watchEffect(() => {
  getProductData();
})

</script>

<template>
  <div class="container py-5"> 
    <div class="row row-cols-1 row-cols-md-4 pb-5">
      <input class="form-control me-2" v-model="searchStr" type="search" placeholder="Search" aria-label="Search" />
    </div>
    
    <div class="row row-cols-1 row-cols-md-4 g-4"  v-if="productData.length > 0">
    
      <product-card
        v-for="(product, index) in productData" 
        :key="product.id"
        :product="product"
      />

      <div class="w3-show-inline-block">
        <div class="w3-bar">
          <button type="button" :disabled="currentPage == 0" @click="currentPage-=8" class="btn store-btn">Previous</button>
          <button type="button" @click="currentPage+=8" :disabled="productData.length < 8" class="btn store-btn end-0 position-absolute float-left">Next</button>
        </div>
      </div>
      
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 store-btn"  v-else>
      <h2>Product not Found!</h2>
    </div>
  </div>
</template>