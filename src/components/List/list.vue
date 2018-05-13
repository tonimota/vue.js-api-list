<template>
  <div>
    <div class="row block-list">
      <div class="col-lg-4">
        <select class="option-category_1" :id="firstClassName">
          <option value="">{{firstPlaceholder}}</option>
          <option v-for="(firstCategory, index) in listFirstCategory" :key="index" :value="firstCategory">{{firstCategory}}</option>
        </select>
      </div>
      <div class="col-lg-4" v-if="listSecondCategory.length > 1">
        <select class="option-category_2" :id="secondClassName">
          <option value="">{{secondPlaceholder}}</option>
          <option v-for="(secondCategory, index) in listSecondCategory" :key="index" :value="secondCategory">{{secondCategory}}</option>
        </select>
      </div>
      <div class="col-lg-2">
        <button @click="applyFilter()">Aplicar</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-0 item-list" v-for="(product, index) in products" :key="index" :id="product.name">
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
// import axios from 'axios'
import helper from './helper.js'
import {
  getAllBeers as getBeers,
  getFindindBeers as findBeers,
  getAllStarwars as getStarwars,
  getFindindPlanets as getPlanets }
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
      listFirstCategory: {},
      listSecondCategory: {},
      firstOption: '',
      secondOption: '',
      search: '',
      firstPlaceholder: '',
      secondPlaceholder: '',
      firstClassName: '',
      secondClassName: ''
    }
  },
  created () {
    this.path = this.$route.path
    if (this.path === '/beers') {
      this.fetchBeers()
    }
    if (this.path === '/starwars') {
      this.fetchStarWars()
    }
  },
  methods: {
    fetchBeers () {
      getBeers()
        .then(data => {
          this.products = data.data
          this.optionsFilterBeers()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchStarWars () {
      getStarwars()
        .then(data => {
          this.products = data.data.results
          this.optionsFilterStarwars()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSearchBeer (search) {
      findBeers(search)
        .then(res => {
          this.products = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSearchPlanets (search) {
      getPlanets(search)
        .then(res => {
          this.products = res.data.results
        })
        .catch(err => {
          console.log(err)
        })
    },
    optionsFilterBeers () {
      this.firstItem = []
      this.secondItem = []
      this.firstPlaceholder = 'Select a type of malt'
      this.firstClassName = 'malt'
      this.secondPlaceholder = 'Select a type of hops'
      this.secondClassName = 'hops'
      this.products.forEach(index => {
        let firstCategory = index.ingredients.malt
        Array.prototype.push.apply(this.firstItem, helper.getIngredientNames(firstCategory))

        let secondCategory = index.ingredients.hops
        Array.prototype.push.apply(this.secondItem, helper.getIngredientNames(secondCategory))
      })
      this.listFirstCategory = Array.from(new Set(this.firstItem)).sort()
      this.listSecondCategory = Array.from(new Set(this.secondItem)).sort()
    },
    optionsFilterStarwars () {
      this.firstItem = []
      this.firstPlaceholder = 'Select a name of planet'
      this.firstClassName = 'search'
      this.products.forEach(index => {
        let firstCategory = index.name
        this.firstItem.push(firstCategory)
      })
      this.listFirstCategory = Array.from(new Set(this.firstItem)).sort()
    },
    applyFilter () {
      this.search = ''
      this.firstOption = document.querySelector('.option-category_1').getAttribute('id') + '=' + document.querySelector('.option-category_1').value
      if (document.querySelector('.option-category_2')) {
        this.secondOption = '&' + document.querySelector('.option-category_2').getAttribute('id') + '=' + document.querySelector('.option-category_2').value
      }
      if (this.firstOption !== '') {
        this.search += this.firstOption
      }
      if (this.secondOption !== '') {
        this.search += this.secondOption
      }
      this.getDataPayload(this.search)
    },
    getDataPayload (search) {
      if (search.match('search') === null) {
        this.fetchSearchBeer(this.search)
      } else {
        this.fetchSearchPlanets(this.search)
      }
    }
  },
  computed: {
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
