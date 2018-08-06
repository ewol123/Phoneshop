<template>
  <div>
    <button v-if="isAdding" class="btn" @click="addToCart()"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="btn btn-danger" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</button>
  </div>
</template>

<script>
import { TYPES } from "../../store.js";

export default {
  props: ["product"],
  data() {
    return {
      cart: this.$store.getters.cart
    };
  },
  computed: {
    isAdding() {
      return this.cart.indexOf(this.product) < 0;
    }
  },
  methods: {
    addToCart() {
      console.log(this.product.id);
      this.$store.commit(TYPES.mutations.ADD_TO_CART, this.product);
    },
    removeFromCart(id) {
      this.$store.commit(TYPES.mutations.REMOVE_FROM_CART, id);
    }
  }
};
</script>
