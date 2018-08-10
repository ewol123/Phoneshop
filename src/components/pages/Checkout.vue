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
import CheckoutForm from "../../components/checkout/CheckoutForm.vue";
import CheckoutList from "../../components/checkout/CheckoutList.vue";
export default {
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  },
  components: {
    "checkout-form": CheckoutForm,
    "checkout-list": CheckoutList
  },
  mounted(){
    console.log(this.$store.getters.cart);
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
