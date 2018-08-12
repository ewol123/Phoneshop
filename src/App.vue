<template>
  <div id="app" >

    <navigation></navigation>
    <router-view></router-view>
    <div class="overlay" v-show="showLoader">
     <wave-spin class="mx-auto spinner "></wave-spin>
  </div>
  </div>
</template>

<script>
import WaveSpin from 'vue-loading-spinner/src/components/Wave.vue'
import navigation from '../src/components/navigation.vue'
import  {TYPES} from './store.js';
import toastr from 'toastr'

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cart;
    },
    showLoader(){
      console.log("loading: ",this.$store.getters.loading);
      return this.$store.getters.loading
    }
  },
  components: {
    "navigation":navigation,
    "wave-spin":WaveSpin
  },
  mounted(){
     this.$store.dispatch(TYPES.actions.allProducts);
    if(!window.$cookies.get("token")){

    this.$store.commit(TYPES.mutations.resetState);
    this.$store.commit(TYPES.mutations.allProducts,JSON.parse(localStorage.getItem("products")));
    }
  },
  created(){
     
     this.$store.subscribe((mutation) => {
        switch (mutation.type) {
          case TYPES.mutations.addProductSuccess:
            toastr.success('Product added.', 'Added!')
            break;
          case TYPES.mutations.addProductFailed:
            toastr.warning('Failed to add product', 'Failed!');
            break;
          case TYPES.mutations.deleteProductSuccess:
            toastr.success('Product deleted', 'Deleted!');
            break;
          case TYPES.mutations.deleteProductFailed:
            toastr.warning('Failed to delete product', 'Failed!');    
            break;
          case TYPES.mutations.updateProductSuccess:
            toastr.success('Product updated', "Updated!");
            break;
          case TYPES.mutations.updateProductFailed:
            toastr.warning('Failed to update product', 'Failed!');
            break;  

        }
    })
  }
};
</script>

<style>
</style>
