<template>
     <div class="card col-md-8">
            <div class="card-body">
                 <form>
  <div class="form-row">
    <div class="form-group  col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputemailcheck4">Confirm Email</label>
      <input type="email" class="form-control" id="inputemailcheck4" placeholder="Email again">
    </div>
  </div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputfirstname">First name</label>
      <input type="text" class="form-control" id="inputfirstname" placeholder="First name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputlastname">Last name</label>
      <input type="text" class="form-control" id="inputlastname" placeholder="Last name">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary float-right col-12">Done</button>
</form>
            </div>
        </div>
</template>


<script>
export default {};
</script>

<style>
</style>
