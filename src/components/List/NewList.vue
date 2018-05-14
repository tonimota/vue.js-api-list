<template>
  <div>
    <div class="row block-list">
      <div class="col-lg-12">
        <span class="tooltiptext">Item removed</span>
      </div>
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
        <button class="dislike" @click.prevent="tootTip(), removeItemNewList(product, index)">Remove to Favorites</button>
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
  },
  methods: {
    removeItemNewList (product, item) {
      this.products.forEach(index => {
        if (index.name === product.name) {
          this.products.splice(item, 1)
        }
      })
      localStorage.setItem('products', JSON.stringify(this.products))
    },
    tootTip () {
      document.querySelector('.tooltiptext').classList.add('tooltip-visible')
      setTimeout(() => {
        document.querySelector('.tooltiptext').classList.remove('tooltip-visible')
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/_variables.scss';
.block-list {
  margin-top: 70px;
}
.dislike {
  display: block;
  margin: 0 auto;
  @extend %btn-standart;
  &:hover {
    @extend %btn-hover;
  }
}
</style>
