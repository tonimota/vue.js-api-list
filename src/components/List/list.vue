<template>
  <div>
    <div class="row block-list">
      <div class="col-lg-4">
        <select class="option-malt" name="" id="">
          <option value="">Select a type of malt</option>
          <option v-for="(malt, index) in listMalt" :key="index" :value="malt">{{malt}}</option>
        </select>
      </div>
      <div class="col-lg-4">
        <select class="option-hops" name="" id="">
          <option value="">Select a type of hops</option>
          <option v-for="(hops, index) in listHops" :key="index" :value="hops">{{hops}}</option>
        </select>
      </div>
      <div class="col-lg-2">
        <button @click="applyFilter()">Aplicar</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-0 item-list" v-for="(product, index) in products" :key="index" :id="product.name">
        <a href="#">
          <img class="product-image" :src='product.image_url || base ' alt="Imagem 1">
        </a>
        <div class="title-description">{{ product.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import helper from './helper.js'
import {
  getAllBeers as getBeers,
  getFindindBeers as findBeers,
  getAllStarwars as getStarwars }
  from '../../service/api'
// import mock from '../../../mock'

export default {
  name: 'List',
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      path: '',
      nameProps: name,
      products: [],
      food: '',
      listMalt: {},
      listHops: {},
      optionMalt: '',
      optionHops: '',
      search: '',
      base: '../../assets/img/img-base.jpg'
    }
  },
  // ready () {
  //   this.fetchBeers()
  // },
  created () {
    this.path = this.$route.path
    if (this.path === '/beers') {
      this.fetchBeers()
      // this.products = mock
      // this.optionsFilter()
    }
    if (this.path === '/starwars') {
      this.fetchStarWars()
    } else {
      console.log('not beers')
    }
  },
  methods: {
    fetchBeers () {
      getBeers()
        .then(data => {
          this.products = data.data
          this.optionsFilter()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchStarWars () {
      getStarwars()
        .then(data => {
          this.products = data.data.results
          console.log(this.products)
          this.optionsFilter()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSearch (search) {
      findBeers(search)
        .then(res => {
          console.log(res.data)
          this.products = res.data
          // this.optionsFilter()
        })
        .catch(err => {
          console.log(err)
        })
    },
    optionsFilter () {
      this.maltItems = []
      this.hopsItems = []
      this.products.forEach(index => {
        let hops = index.ingredients.hops
        Array.prototype.push.apply(this.hopsItems, helper.getIngredientNames(hops))

        let malt = index.ingredients.malt
        Array.prototype.push.apply(this.maltItems, helper.getIngredientNames(malt))
      })

      this.listHops = Array.from(new Set(this.hopsItems)).sort()
      this.listMalt = Array.from(new Set(this.maltItems)).sort()
    },
    applyFilter () {
      this.search = ''
      this.optionMalt = document.querySelector('.option-malt').value
      this.optionHops = document.querySelector('.option-hops').value
      if (this.optionMalt !== '') {
        this.search += 'malt=' + this.optionMalt
      }
      if (this.optionHops !== '') {
        this.search += '&hops=' + this.optionHops
      }
      this.fetchSearch(this.search)
    }
  },
  computed: {
    // filteredBeers: function () {
    //   return this.products.filter(beer => {
    //     let controlMalt = false
    //     let controlHops = false
    //     let control = false
    //     for (let i = 0; i < beer.ingredients.malt.length; i++) {
    //       if (beer.ingredients.malt[i].name === this.optionMalt || this.optionMalt === '') {
    //         controlMalt = true
    //       }
    //     }
    //     for (let i = 0; i < beer.ingredients.hops.length; i++) {
    //       if (beer.ingredients.hops[i].name === this.optionHops || this.optionHops === '') {
    //         controlHops = true
    //       }
    //     }
    //     if (controlMalt && controlHops) {
    //       control = true
    //     }
    //     return true
    //   })
    // }
  }
}
</script>

<style lang="scss">
.block-list {
  margin-top: 60px;
}
.item-list {
  height: 390px;
  &::before {
    content: "";
    display: block;
    margin-top: 50px;
  }
  &:hover {
    .item-price {
      &::before {
        width: 100px;
      }
    }
  }
  a {
    display: block;
    img {
      max-width: 200px;
      max-height: 300px;
      display: block;
      margin: 0 auto;
    }
    // .buy-icon {
    //   width: 50px;
    //   height: 50px;
    //   position: absolute;
    //   top: 45%;
    //   transform: translateY(-50%);
    //   left: 42%;
    //   opacity: 0;
    //   -webkit-transition: opacity 0.5s; /* For Safari 3.1 to 6.0 */
    //   transition: opacity 0.5s;
    // }
    .product-image {
      -webkit-transition: opacity 1s; /* For Safari 3.1 to 6.0 */
      transition: opacity 1s;
    }
    &:hover {
      .product-image {
        opacity: 0.5;
        -webkit-transition: opacity 0.2s; /* For Safari 3.1 to 6.0 */
        transition: opacity 0.2s;
      }
      .buy-icon {
        opacity: 1;
        -webkit-transition: opacity 1s; /* For Safari 3.1 to 6.0 */
        transition: opacity 1s;
      }
    }
  }
  .title-description {
    height: 40px;
    margin-top: 15px;
    text-align: center;
  }
  .item-price {
    font-size: 12px;
    strong {

    }
    &::before {
      content: "";
      width: 20px;
      height: 3px;
      display: block;
      margin: 0 auto;
      background-color: #dfbc00;
      transition: all 0.5s;
    }
  }
  .card-payment {
    color: #999999;
  }
}
select {
  height: 40px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
</style>
