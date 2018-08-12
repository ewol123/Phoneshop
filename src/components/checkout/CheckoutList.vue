<template>
<div>
     <b-alert class="text-center"  v-if="successful" :show="3"> Sikerült a vásárlás</b-alert>
     <div class="row justify-content-center">
            <div class="col-12 col-md-8 mb-sm-2">
                 <div class="mx-auto" v-for="product in Cart">
      
      <div class="card mb-2">
  <h5 class="card-header text-center">{{product.name}}</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-12 col-md-2 col-lg-2"><img v-on:click="details(product.id)" class="img-fluid" :src="product.image" :alt="product.name"></div>
      <div class="col-12 col-md-4 col-lg-3 text-center">
        <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>Price: <strong>US ${{calculatePrice(product)}}</strong></p>
           
      </div>
    
      <div class="col-12 col-md-3 col-lg-2 my-auto">
        <small><p class="text-center">Quantity.</p></small>        
       <strong> <p class="text-center">{{product.quantity}}</p></strong>        
        </div>   
      <div class="col-12 col-md-2 text-center  my-auto"><strong>US ${{product.current_price}}</strong></div>
    </div>
  </div>
</div>
    </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card sticky-top">
                    <div class="card-body">
                        <div class="row">
                            <p class="col-6">Item ({{this.Cart.length}})</p>
                            <p class="col-6">US ${{allPrice}}</p>
                        </div>
                        <div class="row checkout-shipping-line">
                                    <p class=" col-6">Shipping</p>
                                    <p class=" col-6">Free</p>
                                </div>
                        <div class="row pt-2">
                            <h4 class="col-6">Order total</h4>
                           <h4 class="col-6"> <strong>US ${{allPrice}}</strong></h4>
                        </div>
                        <div class="row text-center pt-4">
                            <div class="col-12">
                              <template v-if="ShipAddress">
                             <PayPal
                              v-on:payment-completed="paymentdone()"
                              v-on:payment-authorized="showit()"
                              :amount="allPrice.toString()"
                              currency="USD"
                              :client="credentials"
                              env="sandbox"
                              >
                            </PayPal>
                            </template>
                            <template v-else>
                              Please check your shipping address
                            </template>
                             <p>{{this.Message}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
</template>



<script>
import PayPal from "vue-paypal-checkout";
import { TYPES } from "../../store.js";
export default {
  props: ["Cart"],
  
  computed: {
    Message(){
      return this.$store.getters.message;
    },
    ShipAddress(){
     if(this.$store.getters.shipAddress.length > 0) return true;
     else return false;
    },    
    allPrice() {
      let sum = 0;
      this.Cart.forEach(product => {
        sum += product.current_price;
      });

      return sum;
    }
  },
  components: {
    PayPal
  },
  data() {
    return {
      credentials: {
        sandbox:
          "Ac3AFGtTdvLiUx_A_CMSmv5eIp-xvAulYuABndkARiDDiNn7RMoyBgKl2HCNOmcG4Ypzt2o-qcAVfD-_",
        production:
          "AfAkILSCrfbATGbq84xu2d1ztpJJRIYhowrPY_LHpoFWXvM3EsA08T5QzIJiBdX9cGs6qToyj-_LreGl"
      },
      successful: false
    };
  },
  methods: {
    showit(){
      this.$store.commit(TYPES.mutations.showLoading);
    },  
     calculatePrice(item){
      let discount = parseInt(item.discount);
      let max = 100;
      let totaldisc = (max - discount) /100;

      return Math.round(totaldisc * item.price);
    },
   
    paymentdone() {
      this.successful = true;
      let cart = this.$store.getters.cart;
      let address = this.$store.getters.shipAddress;
      let user = [];
      if(window.$cookies.get("token")){
         user = [JSON.parse(localStorage.getItem("user"))];
      }
      else{
         user =[{
        id:'',
        city:'',
        address:'',
        state:'',
        zip:'',
        birthdate:'',
        gender:'',
        name:'',
        email:''
      }];
      }

      this.$store.dispatch(TYPES.actions.setOrder, {cart: cart, address: address, user: user});

      setTimeout(
        function() {
          this.$store.commit(TYPES.mutations.emptyCart);
          this.$router.push({ name: "Home" });
        }.bind(this),
        3000
      );
    }
  }
};
</script>
