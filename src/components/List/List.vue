<template>
  <div>
    <div class="row block-list">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <select class="option-category_1" :id="firstClassName">
          <option value="">{{firstPlaceholder}}</option>
          <option v-for="(firstCategory, index) in listFirstCategory" :key="index" :value="firstCategory">{{firstCategory}}</option>
        </select>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-if="listSecondCategory.length > 1">
        <select class="option-category_2" :id="secondClassName">
          <option value="">{{secondPlaceholder}}</option>
          <option v-for="(secondCategory, index) in listSecondCategory" :key="index" :value="secondCategory">{{secondCategory}}</option>
        </select>
      </div>
      <div class="col-lg-1 col-md-4 col-sm-12 col-xs-12">
        <button class="applyFilter" @click="applyFilter()">Aplicar</button>
      </div>
      <div class="col-lg-1">
        <span class="tooltiptext">{{tooltipMessage}}</span>
      </div>
    </div>
    <div class="row">
      <div :loading="loading" class="block-loading" >
        <moon-loader class="loading" :loading="loading" :color="color"></moon-loader>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-0 item-list"
      v-for="(product, index) in products" :key="index" :id="product.name">
        <a href="#" v-if="product.image_url === undefined">
          <img class="product-image" src="../../assets/img/img-base.jpg" alt="Imagem 1">
        </a>
        <a href="#" v-else>
          <img class="product-image" :src="product.image_url" alt="Imagem 1">
        </a>
        <div class="title-description">{{ product.name }}</div>
        <button class="liked" @click.prevent="tootTip(product), addItemCart(product)">Adicionar aos Favoritos</button>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '../../assets/js/helper'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import {
  getAllBeers as getBeers,
  getFindindBeers as findBeers,
  getAllStarwars as getStarwars,
  getFindindPlanets as getPlanets }
  from '../../service/api'

export default {
  name: 'List',
  components: {
    'moon-loader': MoonLoader
  },
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
      secondClassName: '',
      newList: [],
      add: false,
      controlLiked: false,
      loading: true,
      color: 'green',
      tooltipMessage: ''
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
    addItemCart (product) {
      this.controlLiked = true
      this.itensLocalStorageCheck()
      this.add = false
      this.newList.forEach((index) => {
        if (index.name === product.name) {
          this.add = true
        }
      })
      if (!this.add) {
        this.newList.push(product)
      }
      localStorage.setItem('products', JSON.stringify(this.newList))
      console.log(this.newList)
    },
    itensLocalStorageCheck () {
      let localItens = JSON.parse(localStorage.getItem('products'))
      if (localItens != null) {
        this.newList = JSON.parse(localStorage.getItem('products'))
      }
    },
    tootTip (product) {
      this.tooltipMessage = 'Item adicionado :)'
      this.itensLocalStorageCheck()
      this.newList.forEach(index => {
        if (index.name === product.name) {
          this.tooltipMessage = 'Item já adicionado :)'
        }
      })
      document.querySelector('.tooltiptext').classList.add('tooltip-visible')
      setTimeout(() => {
        document.querySelector('.tooltiptext').classList.remove('tooltip-visible')
      }, 1000)
    },
    fetchBeers () {
      getBeers()
        .then(data => {
          this.products = data.data
          this.optionsFilterBeers()
          this.loading = false
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
          this.loading = false
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
      this.firstOption = document.querySelector('.option-category_1').value
      if (document.querySelector('.option-category_2')) {
        this.secondOption = document.querySelector('.option-category_2').value
      }
      if (this.firstOption !== '') {
        this.search += document.querySelector('.option-category_1').getAttribute('id') + '=' + this.firstOption
      }
      if (this.secondOption !== '') {
        this.search += '&' + document.querySelector('.option-category_2').getAttribute('id') + '=' + this.secondOption
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
%btn-standart {
  border: 2px solid #ccc;
  background-color: #fff;
  height: 40px;
}
%btn-hover {
  background-color: #539906;
  border: 0px;
  color: #fff;
}
.block-loading {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  .loading {
    display: block;
    margin: 100px auto;
    width: 70px;
  }
}
.block-list {
  margin-top: 70px;
  .applyFilter {
    font-weight: bold;
    width: 100%;
    @extend %btn-standart;
    &:hover {
    @extend %btn-hover;
    }
  }
}
.item-list {
  .liked {
    display: block;
    margin: 0 auto;
    @extend %btn-standart;
    &:hover {
      @extend %btn-hover;
    }
  }
}
select {
  width: 100%;
  height: 40px;
  font-weight: bold;
  border: 2px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.tooltiptext {
  opacity: 0;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 15px;
  transition: all 1s;
  /* Position the tooltip */
  position: fixed;
  z-index: 1;
  top: 50px;
  right: 9%;
}
.tooltip-visible {
  opacity: 1;
}
</style>
