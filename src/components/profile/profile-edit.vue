<template>
     
                        <div class="card mb-4 col-12  mx-auto p-0">

                            <div class="card-header">
                                <div class="text-center">
                                    <h3>Edit profile</h3>
                                </div>
                            </div>

                            <div class="row  bg-light m-0">
                             </div>
                            <div class="card-body mx-auto">
                                <table class="table table-responsive">
                                    
                                    <tbody>
                                    <tr>
                                        <th scope="row">Name:</th>
                                        <td>  <input type="text" class="form-control" v-model="user.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email:</th>
                                        <td> <input type="text" class="form-control" v-model="user.email" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City:</th>
                                        <td> <input type="text" class="form-control" v-model="user.city" placeholder="City" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                      <tr>
                                        <th scope="row">Address</th>
                                        <td> <input type="text" class="form-control" v-model="user.address" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">State</th>
                                        <td> <input type="text" class="form-control" v-model="user.state" placeholder="State" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Zip</th>
                                        <td> <input type="text" class="form-control" v-model="user.zip" placeholder="Zip code" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birth date /yy/mm/dd:</th>
                                        <td> <input type="date" class="form-control" v-model="user.birthdate" placeholder="Birth date" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender:</th>
                                        <td> <input type="text" class="form-control" v-model="user.gender" placeholder="Gender" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Password:</th>
                                        <td> <input :type="passwordVisible ? 'text' : 'password'" class="form-control" v-model="password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                                        </td>
                                       <i class="fa fa-eye mt-3 fa-2x" v-b-tooltip.hover.bottom="'show password'" v-on:click="passwordVisible = !passwordVisible"></i>  
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Password again:</th>
                                        <td> <input :type="passwordVisible ? 'text' : 'password'" class="form-control" v-model="c_password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="text-center mb-3" >
                                <a v-on:click="changeProfile()" class="btn btn-primary text-light ml-lg-2" >Confirm</a>
                        </div>
                       <template v-if="isLoading">
                        <wave-spin class="mx-auto"></wave-spin>
                       </template>
                       <template v-else>
                           <p class="mx-auto">{{Message}}</p>
                       </template>
                    </div>
              
</template>




<script>
import  { TYPES } from "../../store.js";
import WaveSpin from 'vue-loading-spinner/src/components/Wave.vue'
export default {
    mounted(){
    },
    props: ['user'],
    components: {
        "wave-spin":WaveSpin
    },
    computed: {
        isLoading(){
            return this.$store.getters.loading;
        },
        Message(){
            return this.$store.getters.message
        }
    },
    data(){
        return {
        passwordVisible: false,
        password:'',
        c_password:''
        }
    },
    methods: {
         validate() {
      // checks all the form params are set and the passwords match
      if (this.password != this.c_password  ) {
        return false;
      }

      return true;
    },
         changeProfile(){
            let valid =this.validate();     
            if(valid){  
                
               
        let token = this.$cookies.get("token");
           this.$store.dispatch(TYPES.actions.changeUser, {user: this.user, pw:this.password, token:token})
           
            }
            else{
                alert("password dont match");
             
            }
                    
           }
    }
    
}
</script>
