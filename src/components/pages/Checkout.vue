<template>
    <section class="bg-light">
    <div class="container">

        <div class="row">
            <h2 class="p-3 text-center">Phoneshop Checkout</h2>
        </div>

        <div class="row">
            <h5 class="p-3 text-muted">Review item and shipping</h5>
        </div>

      <div class="row">
       <checkout-list :Cart="this.Cart"></checkout-list>
      </div>
      
        <div class="row">
            <h5 class="p-3 text-muted">Ship to</h5>
            
        </div>

        <div class="row pb-3">
            <checkout-form></checkout-form>
        </div>
        

    </div>
    
    </section>

</template>





<script>
import checkoutform from "../../components/checkout/checkoutform.vue";
import checkoutlist from "../../components/checkout/checkoutlist.vue";
export default {
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  },
  components: {
    "checkout-form": checkoutform,
    "checkout-list": checkoutlist
  },
  mounted(){
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
