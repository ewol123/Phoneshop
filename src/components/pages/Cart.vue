<template>
<section >
<div class="container">
  <searchnav></searchnav>

  <div v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <div class="row">
    
    
      <cart-list :cart="this.Cart"></cart-list>
</div>

  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</div>
 
</section>
</template>

<script>
import { TYPES } from "../../store.js";
import ProductDetails from "../../components/product/ProductDetails";
import searchnav from "../../components/searchnav";
import ProductButton from "../../components/product/ProductButton";
import CartList from "../../components/cart/CartList";
export default {
  data() {
    return {
      cart: this.$store.getters.cart,
      quantity: ""
    };
  },
  components: {
    productDetails: ProductDetails,
    searchnav,
    "product-button": ProductButton,
    "cart-list": CartList
  },
  methods: {},
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>

