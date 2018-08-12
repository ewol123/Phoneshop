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
                
            <tr v-for="(item,index) in Products" :key="item.id">
              <td>{{item.name}}</td>
              <td>${{item.price}}</td>
              <td>{{item.discount}}%</td>
              <td>{{item.manufacturer}}</td>
              <td><router-link :to="`/admin/edit/${item.id}`"><i class="fa fa-pencil-square-o"></i></router-link></td>
              <td><a v-on:click="deleteProduct(item.id,index)"><i class="fa fa-trash"></i></a></td>
            </tr>
            
            </tbody>
          </table>

    <!--/Available products-->

    

        </div>
</template>

<script>
  import {TYPES} from '../../../src/store';
  export default {
      computed: {
          Products(){
              //if search text is empty we just return all products
              if(this.searchText === '') {
                  
                 
                 
             return this.$store.getters.allProducts;
            }
            //else we check the text and return item accordingly
            else {
                let products = this.$store.getters.allProducts;
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
      methods: {
            deleteProduct(id,index){
                let token = this.$cookies.get("token");
                let user = JSON.parse(localStorage.getItem("user"));
                let useremail = user.email;
                if(useremail === 'admin@phoneshop.com'){
               this.$store.dispatch(TYPES.actions.deleteProduct,{id:id,token:token,index:index}).then(res =>{
                   this.$store.dispatch(TYPES.actions.allProducts);
               });
                }
                else{
                    alert('You are not the admin');
                }
            }
      },
      data(){
          return {
              searchText: '',
          }
      },
    
   
  }
</script>
