<template>
<div>
  <div class="product-details"  >
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 product-details__image">
          <img
            class="img-fluid" :src="product.image" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-12 product-details__info">
          <div class="product-details__description">
            <small>{{product.manufacturer}}</small>
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
          <div class="product-details__price-cart">
            
            <p>${{calculatePrice(product)}}</p>
           
            <product-button  :product="product"></product-button>
          </div>
           <template v-if="product.discount > 0">
             <strong> {{product.discount}}% Off!</strong>
            </template>
        </div>
      </div>
    </div>
  </div>

  
    <div v-if="page ==='detail'" class="container">
    <div class="row text-center mb-2 mb-md-0">
      <div class="col-12 col-md-2 col-lg-1">NETWORK</div>
      <div class="col-12 col-md-2 col-lg-1">Technology</div>
      <div class="col-12 col-md-2 col-lg-1">GSM / HSPA / LTE</div>
    </div>
     <div class="row text-center mb-2 mb-md-0">
      <div class="col-12 col-md-2 col-lg-1">LAUNCH</div>
      <div class="col-12 col-md-2 col-lg-1">Status</div>
      <div class="col-12 col-md-2 col-lg-1">Available</div>
    </div>
    <div class="row text-center mb-2 mb-md-0">
      <div class="col-12 col-md-2 col-lg-1">DISPLAY</div>
      <div class="col-12 col-md-2 col-lg-1">Size</div>
      <div class="col-12 col-md-2 col-lg-1">5.2inches</div>
    </div>
     <div class="row text-center mb-2 mb-md-0">
      <div class="col-12 col-md-2 col-lg-1">MEMORY</div>
      <div class="col-12 col-md-2 col-lg-1">Internal</div>
      <div class="col-12 col-md-2 col-lg-1">32GB</div>
    </div>
</div>

  </div>
</template>

<script>
import productbutton from "./productbutton";
export default {
  props: ["product", "page"],
  components: {
    "product-button": productbutton
  },
  mounted() {},
  data() {
    return {
      route: "Details"
    };
  },
  methods:{
      calculatePrice(item){
      let discount = item.discount + 100;
      let max = 100;
      let totaldisc = max / discount;

      return Math.round(totaldisc * item.price);
    },
  }
};
</script>

<style>
.product-details {
  border-bottom: 2px solid #f5f5f5;
  padding: 30px 0;
}

.product-details__description {
  padding-top: 30px;
}

.product-details__description small {
  color: #808080;
}

.product-details__description h3 {
  margin: 5px 0 30px 0;
}

.product-details__price-cart {
  display: flex;
  padding-top: 30px;
}

.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
