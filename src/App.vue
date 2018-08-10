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
      
    }
  }
};
</script>

<style>
</style>
