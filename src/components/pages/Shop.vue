<template>
    <div>
        
        <section class="bg-light sec"> 
                <searchnav ></searchnav>
           
          <div class="container">
            <div class="row">
              <!--Side filter bar-->
            <div class="col-12 col-lg-2 col-md-4 text-md-left text-center text-lg-left sidebar pt-4">
               <ul class="pt-3">
                  <strong>FILTER</strong>
                  <div class="row pt-3">
               <router-link  :to="{ path: '/shop/Samsung/n' }">Samsung({{Products.filter(x=>x.manufacturer ==="Samsung").length}}) </router-link>
                 </div>
                 <div class="row pt-3">
               <router-link :to="{ path: '/shop/Apple/n' }">Apple({{Products.filter(x=>x.manufacturer ==="Apple").length}}) </router-link>
               </div>

               <div class="row pt-3">
               <router-link :to="{ path: '/shop/Sony/n' }">Sony({{Products.filter(x=>x.manufacturer ==="Sony").length}}) </router-link>       
               </div>
               <div class="row pt-3">   
               <router-link :to="{ path: '/shop/discounted/n' }">Discounted({{Products.filter(x => x.discount > 0).length}}) </router-link>   
               </div>

               <div class="row pt-3">       
               <router-link :to="{ path: '/shop/allcateg/n' }">Show all...({{Products.length}})</router-link>   
             </div>
               </ul>

                     
            </div>
            <!--/Side filter bar-->
            <div class="col-12 col-lg-10 col-md-8 shoplist ">
           <shop-list :products="filteredCollection"></shop-list>
            </div>
            </div>
          </div>
        </section>
    </div>
</template>


<script>
import searchnav from "../../components/searchnav.vue";
import ShopList from '../../components/shop/ShopList.vue';
import {TYPES} from '../../../src/store.js'
export default {
  components: {
    searchnav,
    "shop-list":ShopList
  },
    mounted(){
      console.log("params: ", this.$route.params);
    },
    computed: {
     
      Products(){
         let products = JSON.parse(localStorage.getItem("products"));
         return products;
      },
     filteredCollection(){
       console.log("collection changed");
       if(this.$route.params.message === "n"){

       switch (this.$route.params.filter) {
         case "allcateg":
          //all
          return this.Products;
         break;
         case "Samsung":
          //samsung
          return this.Products.filter( x=> x.manufacturer === "Samsung");
         break;
         case "Sony":
          //sony
          return this.Products.filter( x=> x.manufacturer === "Sony");
         break;
         case "Apple":
          //apple
          return this.Products.filter( x=> x.manufacturer === "Apple");
         break;
         case "discounted":
         //discounted
         return this.Products.filter(x => x.discount >0);
         break;
         default:
         //all
          return this.Products;
         break;
       }
       }
       else {

       switch (this.$route.params.filter) {
         case "allcateg":
          //all
          let allcategFilter = this.Products.filter(x => x.name.toLowerCase().indexOf(this.$route.params.message.toLowerCase()) !== -1);
          return allcategFilter;
          break;
         case "Samsung":
          //samsung
          let samsung = this.Products.filter( x=> x.manufacturer === "Samsung");

          let samsungFilter = samsung.filter(x => x.name.toLowerCase().indexOf(this.$route.params.message.toLowerCase()) !==-1);
          return samsungFilter;
          break;
         case "Sony":
          //sony
          let sony =  this.Products.filter( x=> x.manufacturer === "Sony");
          let sonyFilter = sony.filter(x => x.name.toLowerCase().indexOf(this.$route.params.message.toLowerCase())!==-1);
          return sonyFilter;
         break;
         case "Apple":
          //apple
          let apple = this.Products.filter( x=> x.manufacturer === "Apple");
          let appleFilter = apple.filter(x => x.name.toLowerCase().indexOf(this.$route.params.message.toLowerCase())!==-1);
          return appleFilter;
          break;
         
         default:
         //all
          return this.Products;
         break;
       }
       }
     }
        },
        
       


       
      
};
</script>
