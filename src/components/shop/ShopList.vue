<template>
    <div>
    <div class="products">
      <div class="container">

            <div class="row">

        <div v-if="products.length > 0" class="col-12 col-lg-4 my-3" v-for="product in list" :key="product.id">
          
          <template>
         <product-item  :product="product" :key="product.id"></product-item>
         
       </template>
        </div>

        <strong class="mx-auto"><p  v-if="products.length === 0">Item not found...</p></strong>
       
        </div>
       
      </div>
       <template v-if="index < products.length">
        <infinite-loading ref="infiniteLoading"  class="mx-auto" @infinite="infiniteHandler"></infinite-loading>
        </template>
        <template v-else>
          <p class="text-muted text-center"><small>Loaded everything!</small></p>
        </template>
    </div>
  </div>
</template>




<script>
import productitem from "../../components/product/productitem.vue";
import InfiniteLoading from "vue-infinite-loading";
export default {
   data(){
       return {
      index: 3,
      list: []
       }
   },
    mounted(){
      console.log("filtered collection: ", this.products);
      console.log(this.list);

      if(this.products.length < 5){
           for (let i = 0; i < this.products.length; i++) {
      this.list.push(this.products[i]);
        }
      }

       if(this.list.length < 1){
         for (let i = 0; i < this.index; i++) {
      this.list.push(this.products[i]);
        }
        }
    },
    watch: {
      products: function(){
        console.log("products changed");
        console.log("changed products: ",this.products);
        console.log("list before clear:",this.list);
        //trigger reset when products change

       //!!!Reset index too
     
      if(this.products.length < 5){
                 this.list = [];
           for (let i = 0; i < this.products.length; i++) {
      this.list.push(this.products[i]);
        }
      }
      else {
        this.index = 3;
       this.changeFilter();
      }
      
     }
    },
   props: ['products'],
   components: {
    "product-item": productitem,
    InfiniteLoading
   },
  
   methods: {
     //here we reset infiniteLoading
     changeFilter() {
         this.list = [];
      for (let i = 0; i < 3; i++) {
      this.list.push(this.products[i]);
        }
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
        infiniteHandler($state) {
          console.log("infiniteHandler called");
      setTimeout(() => {
        const temp = [];
        let step = 3;

        //if you have a small collection of products, lower the steps
        if(this.products.length < 6){
          step = 2;
        }


        for (let i = this.index; i < this.index + step; i++) {
          temp.push(this.products[i]);
        }
        this.list = this.list.concat(temp);
        console.log("end of list: ", this.products.length);
        this.index += step;
        console.log("index", this.index);

      /*here we check if array.length - index / steps is smaller than one, 
        if so that means we cant load "steps" amount of data, because we don't have that much,
        so we just load the rest of them at once.
      */
        if((this.products.length - this.index) /step < 1) {
        for( let i = this.index; i<this.products.length;i++){
          this.list = this.list.concat(this.products[i]);
          $state.loaded();
        }
       $state.complete();
        }
      else{
        $state.loaded();
  }

   
  }, 1000);
    }
   }
        
    
}
</script>
