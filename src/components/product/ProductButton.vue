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
    };
  },
  computed: {
    cart(){
      return this.$store.getters.cart
    },
    isAdding() {
      if(this.cart.filter(x=>x.id === this.product.id).length > 0){
        return false;
      }
      else{
        return true;
      }

    }
  },
  methods: {
    addToCart() {
      this.$store.commit(TYPES.mutations.ADD_TO_CART, this.product);
    },
    removeFromCart(id) {
      this.$store.commit(TYPES.mutations.REMOVE_FROM_CART, id);
    }
  }
};
</script>
