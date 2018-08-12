<template>
     <div class="card col-md-8">
            <div class="card-body">
                 <form @submit.prevent="setShppingAddress()">
  <div class="form-row">
    <div class="form-group  col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" v-model="user[0].email"  id="inputEmail4" placeholder="Email" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputemailcheck4">Confirm Email</label>
      <input type="email" class="form-control" v-model="c_email"  id="inputemailcheck4" placeholder="Email again"  required>
    </div>
  </div>
<div class="form-row">
    <div class="form-group col-md-12 ">
      <label for="inputfirstname">Full name</label>
      <input type="text" class="form-control" v-model="user[0].name" id="inputfullname" placeholder="Full name" required>
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" v-model="user[0].address" id="inputAddress" placeholder="1234 Main St" required>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text"  class="form-control" v-model="user[0].city" id="inputCity" required>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" class="form-control" v-model="user[0].state" id="inputState" required>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" v-model="user[0].zip" id="inputZip" required>
    </div>
  </div>
  
  <button type="submit"  class="btn btn-primary float-right col-12">Done</button>
</form>
            </div>
        </div>
</template>


<script>
import {TYPES} from '../../../src/store.js';
export default {
  created(){
    if(window.$cookies.get("token")){
      this.user =[JSON.parse(localStorage.getItem("user"))];
      this.c_email =this.user[0].email;
    }
    else{
      this.user = [{
        id:'',
        city:'',
        address:'',
        state:'',
        zip:'',
        birthdate:'',
        gender:'',
        name:'',
        email:''
      }];

    }
  },
  methods:{
    isValid(){
      if(this.user[0].email !== this.c_email) return false;
      else return true;
    },
    setShppingAddress(){
      let valid = this.isValid();
      if(valid){
       this.$store.commit(TYPES.mutations.setShippingAddress,this.user);
       
     }
     else{
       alert("Emails don't match");
     }
    }
  },
  
  data(){
     return {
        c_email: '',
        user: []
      }
  }
 

};
</script>

<style>
</style>
