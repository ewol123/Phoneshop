<template>
    <div>
      <section class="bg-light">
    <b-container class="bg-light navcontainer">
    <b-row>    
     <b-col cols="12">   

         <!--search bar-->
    <searchnav></searchnav>
         <!--/search bar-->
    
    </b-col>
    </b-row>
         <!--categories-->
    <b-row>
    <b-col v-on:click="goToRoute({path: '/shop/Samsung/n'})" class="categ text-center" cols="4">Samsung</b-col>
     <b-col v-on:click="goToRoute({path: '/shop/Apple/n'})" class="categ text-center" cols="4">Apple</b-col>   
     <b-col v-on:click="goToRoute({path: '/shop/Sony/n'})" class="categ text-center" cols="4">Sony</b-col>          
    </b-row>
         <!--/categories-->

         <!--carousel-->
       <b-row>
 <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333; width:130% ;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
               
                class="mt-4">

         <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=54">
        <h1 class="">Hello world!</h1>
        </b-carousel-slide>

          <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/300/?image=52"
      ></b-carousel-slide>

         <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/300/?image=52"
      ></b-carousel-slide>

    </b-carousel>
       </b-row>
         <!--/carousel-->

         <!--featured-text-->
       <b-row>
            <h1 class="mx-auto mt-5 featured-text"><i class="fa fa-braille"></i> Featured</h1>
       </b-row>
         <!--/featured-text-->

         <!--product list-->
            <product-list ></product-list>
         <!--/product list-->
        
      
         
    </b-container>
      <my-footer></my-footer>
      </section>
    </div>
</template>

<script>
/* eslint-disable */
import searchnav from "../../components/searchnav.vue";
import ProductList from "../../components/product/ProductList.vue";
import Footer from "../../components/footer.vue";
export default {
  components: {
    searchnav,
    "my-footer": Footer,
    "product-list": ProductList
  },
  methods: {
    goToRoute(route){
      this.$router.push(route);
    }
  }
};
</script>


