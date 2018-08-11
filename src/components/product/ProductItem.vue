<template>
  <div >
    <div class="product">
      <router-link :to="'/details/'+product.id" class="product-link">
        <div class="product__image">
          <img
            class="img-fluid text-center" :src="product.image" alt="">
        </div>
        <div class="product__description row">
        
          <div class="product__info">
            
            <small>{{product.manufacturer}}</small>
            
            <h4>{{product.name}}</h4>
          </div>
          <div class="product__price-cart pl-3">
             <template v-if="product.discount > 0">
               {{product.discount}}% Off!</template> 
               <template v-else>Full Price</template>
            ${{calculatePrice(product)}}
             

          </div>
       
        </div>
      
      </router-link>
      <div class="product__action">
        <product-button :product="product"></product-button>
        <!--<button class="button"><i class="fa fa-cart-plus"></i> Add to Cart</button>-->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productbutton from "./productbutton.vue";
export default {
  name: "product-item",
  props: ["product"],
  components: {
    "product-button": productbutton
  },
  methods: {
    calculatePrice(item){
      let discount = item.discount + 100;
      let max = 100;
      let totaldisc = max / discount;

      return Math.round(totaldisc * item.price);
    }
  }
};
</script>

<style>
.product {
  background: #fff;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}

.product .product__description,
.product .product__action {
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
}

.product:hover .product__description {
  transform: translateY(-40px);
}

.product:hover .product__action {
  transform: none;
}

.product-link {
  display: block;
  color: #3d3d3d;
}

.product-link:hover {
  color: #3d3d3d;
  text-decoration: none;
}

.product .product__image {
  width: 100%;
}

.product__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}

.product__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #fff;
}

.product__info {
  flex: 2;
}

.product__description small {
  color: #808080;
}

.product__description h4 {
  margin: 3px 0 5px 0;
}

.product__price-cart {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #51d2b7;
}

.product__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}

.product__action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}
.product__action button {
  border-radius: 0;
  width: 100%;
  display: block;
}
</style>
