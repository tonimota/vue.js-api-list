<template>
  <div>
    <!-- <div class="row block-list">
      <div class="col-lg-12">
        <div class="input-group">
          <input type="text" class="form-control" v-model="selected" placeholder="Pesquise por uma combinação de Prato...">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div> -->
    <div class="row block-list">
      <div class="col-lg-12">
        <select class="option-malt" name="" id="">
          <option value="">Select a type of malt</option>
          <option v-for="(malt, index) in selectsMalt" :key="index" :value="malt">{{malt}}</option>
        </select>
      </div>
      <div class="col-lg-12">
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
// import axios from 'axios'
import mock from '../../../mock'

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
      selectsMalt: {},
      optionMalt: '',
      search: ''
    }
  },
  created () {
    this.path = this.$route.path
    if (this.path === '/beers') {
      // axios.get('https://api.punkapi.com/v2/beers', {
      // }).then(response => {
      //   this.beers = response.data
      //   this.filterBeer()
      //   console.log(this.beers)
      // }).catch(e => {
      //   console.log(e)
      // })
      this.beers = mock
      this.filterBeer()
    } else {
      console.log('not beers')
    }
  },
  methods: {
    filterBeer () {
      this.itens = []
      this.beers.forEach(index => {
        let malt = index.ingredients.malt
        malt.forEach(indice => {
          this.itens.push(indice.name)
        })
      })
      this.selectsMalt = Array.from(new Set(this.itens))
    },
    applyFilter () {
      this.optionMalt = document.querySelector('.option-malt').value
    }
  },
  computed: {
    filteredBeers: function () {
      return this.beers.filter(beer => {
        for (let i = 0; i < beer.ingredients.malt.length; i++) {
          if (beer.ingredients.malt[i].name === this.optionMalt || this.optionMalt === '') {
            return true
          }
        }
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
