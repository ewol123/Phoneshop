<template>
  <div>
    <div class="admin-new">
      <div class="container">
          <div class="row">
        <div class="col-lg-3 col-md-3 col-12 ">
          <ul class="admin-menu">
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <div class="col-lg-9 col-md-9 col-12">
        <router-view></router-view>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import toastr from 'toastr'

export default {
    methods: {
        toasttest(){
      toastr.success('Product created.', 'Success!')

        }
    }
}
</script>


<style>
  .admin-menu a {
    display: block;
    background: #EFDB06;
    border: 1px solid #F9E610;
    color: #3D3D3D;
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }

  .admin-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.02);
  }

  .admin-new, .admin-products {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
</style>
