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
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2018-02-03</td>
      <td>US $489</td>
      <td><router-link to="/details/3">View</router-link></td>      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2018-03-04</td>
      <td>US $758</td>
      <td><router-link to="/details/1">View</router-link></td>      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2018-04-05</td>
      <td>US $589</td>
      <td><router-link to="/details/4">View</router-link></td>         
    </tr>
     <tr>
      <th scope="row">4</th>
      <td>2018-06-09</td>
      <td>US $894</td>
      <td><router-link to="/details/2">View</router-link></td>            
    </tr>
  </tbody>
</table>
</template>


<script>
export default {
    
}
</script>
