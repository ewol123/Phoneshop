<template>
      <div>
  <div class="container-fluid  ">
      <div class="row">
       <div class="col-md-12 col-12  mx-auto profile-sidebar mb-2 mt-4">
            <a class="btn btn-light col-12 my-2" v-on:click="profileTab='Profile'">Your profile</a>
            <a class="btn btn-light col-12 my-2" v-on:click="profileTab='Profile-edit'">Edit profile</a>
            <a class="btn btn-light col-12 my-2" v-on:click="profileTab='Orderhistory'">Order history</a>
            <i class="fa fa-sign-out fa-3x fa-rotate-180 col-12 " v-on:click="logout()"></i>
        </div>
        </div>

        
      <div class="row">
        <div class="col-12">
        <profile  v-if="profileTab === 'Profile'" :User="User"></profile>
        <profile-edit v-else-if="profileTab ==='Profile-edit'" :user="User"></profile-edit>
        <order-history v-else-if="profileTab ==='Orderhistory'"></order-history>
        </div>
        </div>
        
                     
    </div>
       </div>
</template>



<script>
import Profile from '../../components/profile/profile'
import ProfileEdit from '../../components/profile/profile-edit'
import OrderHistory from '../../components/profile/order-history'
import { mapGetters, mapMutations } from "vuex";
import { TYPES } from "../../store.js";

export default {


    computed: {
        User(){
           
            return JSON.parse(localStorage.getItem("user"));
        },
        },
        data(){
            return {
                profileTab: "Profile",
            }
        },
        methods: {
            ...mapMutations([TYPES.mutations.deleteUser]),
            logout(){
                  this.$cookies.remove("token");
                  localStorage.clear();
                  this.deleteUser();
                  this.$router.push({name:"Home"});
                  this.$store.commit(TYPES.mutations.resetState);
                  
            }
        },
    components: {
        "profile":Profile,
        "profile-edit":ProfileEdit,
        "order-history":OrderHistory
    }
    
}
</script>


