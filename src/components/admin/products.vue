<template>
    <div class="col-lg-9 col-md-9 col-12 text-center ">
 
 <!--Admin search-->
 <b-navbar class="col-12"  toggleable="md" type="light" variant="light">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="mx-auto">
  <b-navbar-brand class="text-sm-center text-center" >Search items </b-navbar-brand>

         <b-nav-form>
        <b-form-input v-model="searchText" size="md" class="mr-sm-2 search " type="text" placeholder="Search for anything..."/>
      </b-nav-form>
    </b-navbar-nav>
</b-navbar>
            {{searchText}}
<!--/Admin search-->

    <!--Available products-->
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Manufacturer</th>              
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                
            <tr v-for="item in list" :key="item.id">
              <td>{{item.name}}</td>
              <td>${{item.price}}</td>
              <td>{{item.discount}}%</td>
              <td>{{item.manufacturer}}</td>
              <td><router-link :to="`/admin/edit/${item.id}`"><i class="fa fa-pencil-square-o"></i></router-link></td>
              <td><a @click="deleteProduct(product._id)"><i class="fa fa-trash"></i></a></td>
            </tr>
            
            </tbody>
          </table>

    <!--/Available products-->

    <!--Infinite loader-->      
           <template v-if="index < Products.length">
           <infinite-loading ref="infiniteLoading"  class="mx-auto" @infinite="infiniteHandler"></infinite-loading>
           </template>
           <template v-else>
               <small class="text-muted">Everything Loaded!</small>
               
               </template> 
    <!--/Infinite loader-->

        </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

  export default {
      components: {
          InfiniteLoading
      },

      watch: {
          //if search text is changed we reset our infinite loader
          searchText: function(){
          
             if(this.Products.length < 10){
                 this.list = [];
           for (let i = 0; i < this.Products.length; i++) {
      this.list.push(this.Products[i]);
        }
      }
      else {
        this.index = 10;
       this.changeFilter();
      } 
          } 
      },
      created(){
       //load first 10 products
    for (let i = 0; i < this.index; i++) {
      this.list.push(this.Products[i]);
    }
      },
      computed: {
          Products(){
              //if search text is empty we just return all products
              if(this.searchText === '') {
                  console.log("search is empty");
             return JSON.parse(localStorage.getItem("products"));
            }
            //else we check the text and return item accordingly
            else {
                let products = JSON.parse(localStorage.getItem("products"));
                let filteredProducts = [];
                let search = this.searchText;

                for(let i = 0; i < products.length; i++){
                   
                   for(let key in products[i]){
                       if(key !== 'image' &&
                          key !== 'description' &&
                          key !== 'id' &&
                          key !== 'manId'&&
                          key !== 'manufacturerId'
                       ){
                      if(products[i][key].toString().toLowerCase().indexOf(search.toString().toLowerCase()) !== -1 ){
                          filteredProducts.push(products[i]);
                          break;
                      }
                       }
                   }
                      
                }
            
              return filteredProducts;

            }
          }
      },
      data(){
          return {
              index: 10,
              list: [],
              searchText: '',
          }
      },
      methods: {
           changeFilter() {
         this.list = [];
      for (let i = 0; i < this.index; i++) {
      this.list.push(this.Products[i]);
        }
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
          infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        let step = 10;
   
      /*here we check if array.length - index / steps is smaller than one, 
        if so that means we cant load "steps" amount of data, because we don't have that much,
        so we just load the rest of them at once.
      */
       if((this.Products.length - this.index) /step < 1) {
        for( let i = this.index; i<this.Products.length;i++){
          this.list = this.list.concat(this.Products[i]);
          $state.loaded();
        }
         this.index = this.Products.length;
          $state.complete();
        
        }
      else{
       
        $state.complete();
  }
        //update list of products with infiniteHandler
        
        if(this.index < this.Products.length){
        for (let i = this.index; i < this.index + step; i++) {
          temp.push(this.Products[i]);
        }
        this.list = this.list.concat(temp);
        console.log("admin-product-newlist", this.list);
        console.log("end of list: ", this.Products.length);
        this.index += 10;
        console.log("index", this.index);
        $state.loaded();
        }
        else{
            $state.complete();
        }
       
  }, 1000);
    }
      }
   
  }
</script>
