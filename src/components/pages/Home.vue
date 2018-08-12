<template>
    <div>
      <section class="bg-light">
    <div class="bg-light container navcontainer">
    <div class="row">    
     <div class="col-12" >   

         <!--search bar-->
    <searchnav></searchnav>
         <!--/search bar-->
    
    </div>
    </div>
         <!--categories-->
    <div class="row">
    <b-col v-on:click="goToRoute({path: '/shop/Samsung/n'})" class="categ text-center" cols="4">Samsung</b-col>
     <b-col v-on:click="goToRoute({path: '/shop/Apple/n'})" class="categ text-center" cols="4">Apple</b-col>   
     <b-col v-on:click="goToRoute({path: '/shop/Sony/n'})" class="categ text-center" cols="4">Sony</b-col>          
    </div>
         <!--/categories-->

         <!--carousel-->
       <div class="row">
 <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333; width:130% ;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
               
                class="mt-4">

        <router-link to="/signin">
         <b-carousel-slide 
          img-src="https://picsum.photos/1024/300/?image=668">
          <div class="row">
          <h1 class="mb-5 mx-auto">REGISTER NOW!</h1>
           <h4 class="mx-auto"><strong>Register on our site now, so you can save your cart, and many many more!</strong></h4>
          </div>
        </b-carousel-slide>
        </router-link>

        <router-link to="shop/allcateg/n">
          <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=816" >
              <div class="row">
          <h1 class="mb-5 mx-auto">SEARCH IN OUR SHOP!</h1>
           <h4 class="mx-auto"><strong>Check all of our products and find an awesome phone for yourself! </strong></h4>
          </div>          
     </b-carousel-slide>
        </router-link>

         <b-carousel-slide caption="and grab some coffee..."
                        text="Everyone likes cofee!!."
                        img-src="https://picsum.photos/1024/300/?image=431"
      ></b-carousel-slide>

    </b-carousel>
       </div>
         <!--/carousel-->

         <!--featured-text-->
       <div class="row">
            <h1 class="mx-auto mt-5 featured-text"><i class="fa fa-braille"></i> Featured</h1>
       </div>
         <!--/featured-text-->

         <!--product list-->
         <div class="row">
           <div class="col-10 mx-auto">
            <product-list></product-list>


          </div>
         </div>
         <!--/product list-->
        
      
         
    </div>
      <my-footer></my-footer>
      </section>
    </div>
</template>

<script>
/* eslint-disable */
import searchnav from "../../components/searchnav.vue";
import productlist from "../../components/product/productlist.vue";
import footer from "../../components/footer.vue";
export default {
  components: {
    searchnav,
    "my-footer": footer,
    "product-list": productlist
  },
  methods: {
    goToRoute(route){
      this.$router.push(route);
    }
  }
};
</script>

<style>

</style>



