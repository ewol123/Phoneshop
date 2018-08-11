<template>
    <div>
      <div class="row">
    <div class="col-12 col-md-8 col-lg-9" >
         <div v-for="product in cart">
      <div class="card mt-3">
  <h5 class="card-header text-center">{{product.name}}</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-md-2 col-lg-2 col-12 "><img v-on:click="details(product.id)" class="img-fluid" :src="product.image" :alt="product.name"></div>
      <div class="col-md-4 col-lg-3 col-12 text-center text-md-left">
        <small>{{product.manufacturer }}</small>
            <h3>{{product.name}}</h3>
            <p>Price: <strong>US ${{calculatePrice(product)}}</strong></p>
           
      </div>
    
      <div class="col-md-3 col-lg-2 col-12 my-auto">
        <small><p class="text-center">Quantity.</p></small>        
          <input min="1" type="number" class="form-control" name="" id="" @change="changeqt(product.id,$event.target.value)" :value="product.quantity" >   
        
        </div>   
      <div class="col-md-3  col-lg-2 col-12 text-center my-3  my-md-auto"><strong>US ${{product.current_price}}</strong></div>
      <div class="col-md-12 col-12 col-lg-3 text-center my-auto">
            <product-button  :product="product"></product-button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
<div class="col-12 col-md-4 col-lg-3 mt-3">
      <div class="card">
        <div class="card-body sticky-top">
          <h5  class="pb-2 checkout-shipping-line"><strong>Cart summary</strong> <small>({{cart.length}} item)</small></h5>
          <h4 class="mt-2 pb-2"><strong>Total: US ${{allPrice}}</strong></h4>
         
          <button   v-on:click="checkout()" class="  col-12  btn btn-primary">Proceed to checkout</button>    
          <h6 class="text-center pt-3 pb-2"><strong>Phoneshop money back guarantee</strong></h6>  
          <small><p class="text-center text-muted">Covers your purchase price plus original shipping on virtually all items.
          Get the item you ordered or get your money back. </p></small>
          <h6 class=" pb-2 pt-2 "><strong>About your cart</strong></h6>
          <div class="text-muted">
            <small>          
              <p class="cart-card-line"> Are items in my cart reserved for me?</p>
          <p class="cart-card-line">Why are auction or best offer items in my cart?</p>
          <p class="cart-card-line">Where can I see the items I'm bidding on?</p>
          <p class="cart-card-line">If I buy from different sellers, will I need to pay separately?</p>
          <p class="cart-card-line">Can I pay for items from more than one seller or different types of transactions in one payment?</p>
            </small>

          </div>
        </div>
      </div>
    </div>



  </div>
    <div class="row ">
      <div class="col-12 col-sm-12 col-md-8 col-lg-5 mt-3 mb-5">
    <div class="card">
        <div class="card-body">
          <p>Subtotal ({{this.cart.length}}): US ${{allPrice}}</p>
          <p> Shipping to XX: FREE</p>
          <p id="total"><strong>Total: US ${{allPrice}} </strong></p>
          <div class="">
          <button v-on:click="shop()" class="btn btn-success  mb-2">Continue shopping</button>
          <button v-on:click="checkout()" class="btn btn-primary mb-2">Proceed to checkout</button>
          </div>
        </div>
      </div>
      </div>
      </div>
        </div>
</template>



<script>
import { TYPES } from "../../store.js";
import productbutton from "../../components/product/productbutton";
export default {
  props: ["cart"],
  mounted() {
    console.log("pricem", this.getPrice);
  },

  methods: {
    calculatePrice(item){
      let discount = item.discount + 100;
      let max = 100;
      let totaldisc = max / discount;

      return Math.round(totaldisc * item.price);
    },
    details(id) {
      this.$router.push({ path: `/details/${id}` });
    },

    changeqt(item, quantity) {
      let payload = { id: item, quant: quantity };
      this.$store.commit(TYPES.mutations.changeQuantity, payload);
    },
    shop() {
      this.$router.push({ name: "Shop" });
    },

    checkout() {
      this.$router.push({ name: "Checkout" });
    }
  },
  components: {
    "product-button": productbutton
  },
  computed: {
    allPrice() {
      let sum = 0;
      this.cart.forEach(product => {
        sum += product.current_price;
      });

      return sum;
    }
  }
};
</script>
