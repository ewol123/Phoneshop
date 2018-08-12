
<template>
  <div>
    <div class="products">
      <div class="container">

          <paginate-links class="row text-secondary justify-content-center h1 paginate-button" for="products" :limit="2" :show-step-links="true"></paginate-links>
 
         <span v-if="$refs.paginator" >
         <p class="text-center"><strong> Viewing {{$refs.paginator.pageItemsCount}} results</strong></p>
         </span>

          <paginate
            name="products"
            :list="products"
            :per="6"
            ref="paginator"
            class="row"
          >
        <div class="col-12  col-lg-4" v-for="product in paginated('products')" :key="product.id">
          
          <template>
         <product-item :product="product" :key="product.id"></product-item>
           </template>
        </div>
          </paginate>
       
          
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productitem from "./productitem.vue";
import { TYPES } from "../../../src/store.js";
export default {
  name: "product-list",
  
  computed: {
    products: {
      get: function() {
        let product = JSON.parse(localStorage.getItem("products"));
        let filtered = product.filter(x => x.discount > 0);
        return filtered;
      },
      set: function(value) {
      }
    },

  },
  
  data() {
    return {
         
         paginate: ['products']
    };
  },
  methods: {
   
  },
  components: {
    "product-item": productitem,
  }
};
</script>

<style>
.products {
  padding: 30px 0;
}
.paginate-button {
    letter-spacing: 1rem;
}

  .paginate-button a {
    cursor: pointer;
     transition: 0.3s;
  }

  .paginate-button a:hover {
    font-size: 55px;
  }
  li.active a {
    font-weight: bold;
  }
  li.next:before {
    content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }


</style>
