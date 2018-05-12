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
      <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-0 item-list" v-for="(beer, index) in filteredBeers" :key="index" :id="beer.sku">
        <a href="#">
          <img class="product-image" :src="beer.image_url" alt="Imagem 1">
        </a>
        <div class="title-description">{{ beer.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      beers: [],
      food: '',
      listMalt: {},
      listHops: {},
      optionMalt: '',
      optionHops: '',
      search: ''
    }
  },
  created () {
    this.path = this.$route.path
    if (this.path === '/beers') {
      axios.get('https://api.punkapi.com/v2/beers', {
      }).then(response => {
        this.beers = response.data
        this.optionsFilter()
      }).catch(e => {
        console.log(e)
      })
      // this.beers = mock
      this.optionsFilter()
    } else {
      console.log('not beers')
    }
  },
  methods: {
    optionsFilter () {
      this.maltItem = []
      this.hopsItem = []
      this.beers.forEach(index => {
        let hops = index.ingredients.hops
        hops.forEach(indice => {
          this.hopsItem.push(indice.name)
        })
        let malt = index.ingredients.malt
        malt.forEach(indice => {
          this.maltItem.push(indice.name)
        })
      })
      this.listHops = Array.from(new Set(this.hopsItem)).sort()
      this.listMalt = Array.from(new Set(this.maltItem)).sort()
    },
    applyFilter () {
      this.optionMalt = document.querySelector('.option-malt').value
      this.optionHops = document.querySelector('.option-hops').value
    }
  },
  computed: {
    filteredBeers: function () {
      return this.beers.filter(beer => {
        let controlMalt = false
        let controlHops = false
        let control = false
        for (let i = 0; i < beer.ingredients.malt.length; i++) {
          if (beer.ingredients.malt[i].name === this.optionMalt || this.optionMalt === '') {
            controlMalt = true
          }
        }
        for (let i = 0; i < beer.ingredients.hops.length; i++) {
          if (beer.ingredients.hops[i].name === this.optionHops || this.optionHops === '') {
            controlHops = true
          }
        }
        if (controlMalt && controlHops) {
          control = true
        }
        return control
      })
    }
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
