<template>
    <div class="container">

        <div class="row">
            <h2 class="pt-5 mx-auto">PHONESHOP</h2>
        </div>


        <div class="row ">
         <b-tabs class="mx-auto pt-3">
           
           <!--Login tab-->
  <b-tab title="Sign In" active>
    <div class="card">
        <div class="card-body">
    <b-form @submit.prevent="login" >
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="model.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="model.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
    
      
      <b-button class="col-12" type="submit" variant="primary">Sign in</b-button>
    </b-form>
  </div>
  </div>
  </b-tab>
           <!--/Login tab-->

    <!--Register tab-->  
  <b-tab title="Register" >
    <div class="card">
        <div class="card-body">
                <b-form @submit.prevent="register">
       <b-form-group id="exampleInputGroup1"
                    label="Full name:"
                    label-for="exampleInput1"
                    description="Please give us your full name.">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="model.name"
                      required
                      placeholder="Enter full name">
        </b-form-input>
         
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
                    label="Email address:"
                    label-for="exampleInput3"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput3"
                      type="email"
                      v-model="model.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="model.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup4"
                    label="Password again:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="password"
                      v-model="model.c_password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button class="col-12" type="submit" variant="primary">Register</b-button>
      
    </b-form>
        </div>
    </div>
  </b-tab>
    <!--Register tab-->  
  
</b-tabs>
      
        </div>
        <div class="row">
          
          <div class="col-12   text-center">
           <wave-spin class="mx-auto pt-3 " v-show="showLoader"></wave-spin>
        </div>
        </div>

        <div class="row">       
          <div class="col-12   text-center">
          <p>{{Message}}</p>
        </div>
        </div>

    
    </div>
</template>



<script>
import { TYPES } from "../../store.js";
import WaveSpin from 'vue-loading-spinner/src/components/Wave.vue'

export default {
  components:{
    WaveSpin
  },
  computed: {
     showLoader () {
      return this.$store.getters.loading;
    },
    Message(){
        return this.$store.getters.message;
    }
  },
  data() {
    return {
      model: {
        name: "",
        email: "admin@phoneshop.com",
        password: "havefun234",
        c_password: "",
     
      }
    };
  },
 
  methods: {
     validate() {
      // checks all the form params are set and the passwords match
      if (this.model.password != this.model.c_password  ) {
        return false;
      }

      return true;
    },
    register(){
      let valid = this.validate();

      if(valid){
        this.$store.dispatch(TYPES.actions.register, {model:this.model}).then(r => {

              if(r.data.status === true){
             this.$cookies.set("token",r.data.token,"24h");         
              this.$router.push({ name: "Profile" });
               
                }
               
                }).catch(err =>{return Promise.reject(err)});

      }
      else {
        alert("Passwords do not match");
      }      
    },
    login(){
        this.$store.dispatch(TYPES.actions.login,{model: this.model})
        .then(r =>{
             if(r.data.status === true){
             this.$cookies.set("token",r.data.token,"24h");                 
              this.$router.push({ name: "Profile" });

                }
               
        }).catch(err =>{return Promise.reject(err)});
    }
  }
};
</script>

