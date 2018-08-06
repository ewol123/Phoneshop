<template>
    <div>
        
        <section class="bg-light sec"> 
                <searchnav></searchnav>
           
          <div class="container">
            <div class="row">
              <!--Side filter bar-->
            <div class="col-12 col-lg-2 col-md-4 text-md-left text-center text-lg-left sidebar pt-4">
               <ul>
                   <strong>MANUFACTURERS</strong>
               <li>Samsung(23)</li>    
               <li>Apple(12)</li>
               <li>Sony(43)</li>    
               </ul>

               <ul>
                  <strong>FILTER</strong>
                <li>
                 <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                     Discounted
                  </label>
                 </div>                     
                </li>    
               <li>
                <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                    Samsung
                 </label>
                </div>  
               </li>
               <li>
               <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                    Apple
                 </label>
                </div>    
               </li>    
               <li>
                   <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                    Sony
                 </label>
                </div>
               </li>
               </ul>          
            </div>
            <!--/Side filter bar-->
            <div class="col-12 col-lg-10 col-md-8 shoplist ">
                 <product-list page="shop"></product-list>
            </div>
            </div>
          </div>
        </section>
    </div>
</template>


<script>
import searchnav from "../../components/searchnav.vue";
import ProductList from "../../components/product/ProductList.vue";

export default {
  components: {
    searchnav,
    "product-list": ProductList
  }
};
</script>
