<template>
  <div>
    <div class="row block-list">
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-0 item-list"
      v-for="(product, index) in products" :key="index" :id="product.name">
        <a href="#" v-if="product.image_url === undefined">
          <img class="product-image" src="../../assets/img/img-base.jpg" alt="Imagem 1">
        </a>
        <a href="#" v-else>
          <img class="product-image" :src="product.image_url" alt="Imagem 1">
        </a>
        <div class="title-description">{{ product.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = JSON.parse(localStorage.getItem('products'))
    // console.log(products)
  }
}
</script>
<style>
.block-list {
  margin-top: 60px;
}
</style>
