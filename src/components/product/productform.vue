<template>
  <form >
      <div class="container-fluid">
      <div class="row mx-auto">
    <div class="col-lg-5 col-md-5 col-12 ">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          class="form-control"
          />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
         >
      </div>
      <div class="form-group">

        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          >
       
        </select>
      </div>
    </div>

    <div class="col-lg-7 col-md-4 col-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          placeholder="Image"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
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
 
  export default {
      props:['page']
  }
</script>
