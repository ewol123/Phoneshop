<template>
     <nav class="mb-2 shadow">
      <div class="container">
        <ul class="nav__left ">
         <li class="mx-auto" v-for="item in itemCollection" :key="item.id">
             <router-link :to="item.path">
                 <i :class="item.class"></i>
            {{ item.name }}
          </router-link>    
         </li>
        </ul>
      </div>
    </nav>
</template>



<script>
import { mapGetters, mapMutations } from "vuex";
import { TYPES } from "../store.js";

export default {

    computed: {
        cartItemsCount() {
        return this.$store.getters.cart;
        },
      baseNav(){
        return [
        {
          name: "Home",
          id: "home",
          path: "/",
          class: "fa fa-home"
        },
        {
          name: "Admin",
          id: "admin",
          path: "/admin",
          class: "fa fa-user"
        },
        {
          name:`Cart(${this.cartItemsCount.length})`,
          id: "cart",
          path: "/cart",
          class: "fa fa-shopping-cart"
        }
       
      ]
      },
       
         ...mapGetters({ isLoggedIn: TYPES.getters.isLoggedIn }),
          itemCollection() {
      if (this.isLoggedIn) {
        return [
          ...this.baseNav,
          {
            name: "Profile",
            id: "profile",
            path: "/profile",
            class:"fa fa-user-circle"
          },
        ];
      } else {
        return [
          ...this.baseNav,
          {
          name: "Login/Register",
          id: "SignIn",
          path: "/signin",
          class: "fa fa-sign-in"
        }
        ];
      }
    }
    },
    data() {
    return {
     
    };
  }
}
</script>
