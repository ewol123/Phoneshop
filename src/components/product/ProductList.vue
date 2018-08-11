
<template>
  <div>
    <div class="products">
      <div class="container">

 
            <div class="row">

        <div  class="col-12 col-lg-3 my-3" v-for="product in list" :key="product.id">
          
         <product-item v-if="product.discount >0" :product="product" :key="product.id"></product-item>
          
        </div>
           



        </div>
        <infinite-loading  v-if="index < products.length" class="mx-auto" @infinite="infiniteHandler"></infinite-loading>
          
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productitem from "./productitem.vue";
import InfiniteLoading from "vue-infinite-loading";
import { TYPES } from "../../../src/store.js";
export default {
  name: "product-list",
  created() {


    
    for (let i = 0; i < this.index; i++) {
      this.list.push(this.products[i]);
    }


    console.log("created", this.list);
    console.log("products length", this.products.length);
    
  },
  computed: {
    products: {
      get: function() {
        let product = JSON.parse(localStorage.getItem("products"));
        return product;
      },
      set: function(value) {
      console.log("set called");
      }
    },

  },
  mounted() {
    console.log("mounted", this.products);
    console.log("rowcount", this.rowcount);
  },
  data() {
    return {
      list: [],
      index: 8
    };
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        let step = 4;
      /*here we check if array.length - index / steps is smaller than one, 
        if so that means we cant load "steps" amount of data, because we don't have that much,
        so we just load the rest of them at once.
      */
        if((this.products.length - this.index) /step < 1) {
        for( let i = this.index; i<this.products.length;i++){
          this.list = this.list.concat(this.products[i]);
          $state.loaded();
        }
          $state.complete();
        }
      else{
          $state.loaded();
  }
        if(this.index < this.products.length){
        for (let i = this.index; i < this.index + step; i++) {
          temp.push(this.products[i]);
        }
        this.list = this.list.concat(temp);
        console.log("newlista", this.list);
        console.log("end of list: ", this.products.length);
        this.index += 4;
        console.log("index", this.index);
        $state.loaded();
      }
      else {
        $state.complete();
      }

      
  }, 1000);
    }
  },
  components: {
    "product-item": productitem,
    InfiniteLoading
  }
};
</script>

<style>
.products {
  padding: 30px 0;
}
</style>
