<template>
  <div id="app" >

    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '../src/components/navigation.vue'
import {TYPES} from './store.js';
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cart;
    }
  },
  components: {
    "navigation":navigation
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
