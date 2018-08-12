<template>
  <form  @submit.prevent="page === 'new' ? addNewProduct() : updateProduct()">
      <div class="container-fluid">
      <div class="row mx-auto">
    <div class="col-lg-5 col-md-5 col-12 ">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          class="form-control"
          required
          v-model="model.name"
          />
          
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          required
          v-model="model.price"
         >
      </div>
      <div class="form-group">

        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          required
          >
          <option value="1">Samsung</option>
          <option value="2">Apple</option>
          <option value="3">Sony</option>
        </select>
      </div>

      <div class="form-group">
        <label>Discount</label>
        <input 
        type="number"
        placeholder="Discount"
        class="form-control"
        required
        v-model="model.discount"
        />
      </div>
    </div>

    <div class="col-lg-7 col-md-4 col-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          v-model="model.image"
          placeholder="Image"
          required
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          v-model="model.description"
          required
          rows="5"
           ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="btn btn-primary">
          <i class="fa fa-pencil"></i>
          <span v-if="page ==='new'">Add Product</span>
          <span v-else>Update product</span>
        </button>
      </div>
    </div>
    </div>
    </div>
  </form>
</template>

<script>
 import {TYPES} from '../../../src/store';
  export default {
      created(){
        if(this.page ==="edit"){
          let id = parseInt(this.params);
          let filtered = this.Products.filter(x => x.id === id);
          this.model.name = filtered[0].name;
          this.model.price =filtered[0].price;
          this.model.manufacturer =filtered[0].manufacturerId;
          this.model.image =filtered[0].image;
          this.model.discount =filtered[0].discount;
          this.model.description =filtered[0].description;
        }
      },
      props:['page','params'],
      data(){
        return{
          model:{
            name:'',
            price:'',
            manufacturer:'',
            image:'',
            discount:'',
            description:''
          }
        }
      },
      computed :{
        
        Products(){
          return JSON.parse(localStorage.getItem("products"));
        }
      },
      methods:{
        addNewProduct(){
          let token = this.$cookies.get("token");
           let user = JSON.parse(localStorage.getItem("user"));
          let useremail = user.email;
          if(useremail ==='admin@phoneshop.com'){
          this.$store.dispatch(TYPES.actions.addProduct, {payload:this.model, token:token}).then(res =>{

             this.$store.dispatch(TYPES.actions.allProducts).then(res =>{
               this.model.name = '';
               this.model.price = '';
               this.model.manufacturer = '';
               this.model.image = '';
               this.model.discount = '';
               this.model.description = '';
               
               });
          });

          }
          else{
            alert("You are not the admin!")
          }
        },
        updateProduct(){
          let token = this.$cookies.get("token");
          let user = JSON.parse(localStorage.getItem("user"));
          let useremail = user.email;
          if(useremail === 'admin@phoneshop.com'){
           this.$store.dispatch(TYPES.actions.updateProduct, {payload:this.model,token:token,id:this.params}).then(res =>{
             this.$store.dispatch(TYPES.actions.allProducts);
           });
          }
          else{
            alert("You are not the admin!");
          } 
       
        }
      }
  }
</script>
