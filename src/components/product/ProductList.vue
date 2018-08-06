
<template>
  <div>
    <div class="products">
      <div class="container">

 
            <div class="row">

        <div v-if="page ==='home'" class="col-12 col-lg-3 my-3" v-for="product in list" :key="product.id">
          
         <product-item :product="product" :key="product.id"></product-item>
          
        </div>
           

        <div v-if="page ==='shop'" class="col-12 col-lg-4 my-3" v-for="product in list" :key="product.id">
          
         <product-item :product="product" :key="product.id"></product-item>
          
        </div>


        </div>
        <infinite-loading v-if="index < products.length" class="mx-auto" @infinite="infiniteHandler"></infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ProductItem from "./ProductItem.vue";
import InfiniteLoading from "vue-infinite-loading";
import { TYPES } from "../../../src/store.js";
export default {
  name: "product-list",
  props: ["page"],
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }

    console.log("created", this.products);

    for (let i = 0; i < this.index; i++) {
      this.list.push(this.products[i]);
    }

    console.log("created", this.list);
    console.log("products length", this.products.length);
  },
  computed: {
    products: {
      get: function() {
        return this.$store.getters.allProducts;
      },
      set: function(value) {
        this.$store.commit(TYPES.mutations.setProducts);
      }
    }
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
        for (let i = this.index; i < this.index + 4; i++) {
          temp.push(this.products[i]);
        }
        this.list = this.list.concat(temp);
        console.log("newlista", this.list);
        this.index += 4;
        console.log("index", this.index);
        $state.loaded();
      }, 1000);
    }
  },
  components: {
    "product-item": ProductItem,
    InfiniteLoading
  }
};
</script>

<style>
.products {
  padding: 30px 0;
}
</style>
