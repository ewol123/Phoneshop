<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Order date</th>
      <th scope="col">Total</th>
      <th scope="col">Item</th>
    </tr>
  </thead>
  <tbody v-for="item in orders" :key="item.orderId">
    
    <tr>
      <th scope="row">{{item.orderId}}</th>
      <td>{{item.orderDate}}</td>
      <td>US ${{item.price}}</td>
      <td><router-link :to="setRoute(item)">View</router-link></td>      
    </tr>
    
    
  </tbody>
</table>

</template>


<script>
import {TYPES} from '../../../src/store.js';
export default {
  methods:{
    setRoute(item){
      let route =  `/details/${item.itemId}`;
      return route;
    }
  },
  
  computed:{
    
    orders(){
      return JSON.parse(localStorage.getItem("orders"));

    }
  }
    
}
</script>
