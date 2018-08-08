<template>
<div>
<div>
 <b-navbar class="col-12"  toggleable="md" type="light" variant="light">





    <!-- Right aligned nav items -->
    <b-navbar-nav class="mx-auto">
  <b-navbar-brand class="text-sm-center text-center" >PHONESHOP</b-navbar-brand>

         <b-nav-form  >
        <b-form-input v-model="message" size="md" class="mr-sm-2 search " type="text" placeholder="Search for anything..."/>
         <b-form-select v-model="selected" :options="options" class="mr-1 category ">
    </b-form-select>


        <b-button size="md"  class="my-2 my-sm-0 mx-auto searchbutton" variant="primary" v-on:click="shop()" type="submit">Search</b-button>
      </b-nav-form>


      
    </b-navbar-nav>

 
</b-navbar>
</div>

</div>
</template>

<script>
import {TYPES} from '../../src/store.js'
export default {
  data() {
    return {
      selected: "All categories",
      options: ["All categories", "Samsung", "Apple", "Sony"],
      message: ''
    };
  },
  methods: {
    shop() {
     
      if(this.selected ==="All categories"){
        this.selected = "allcateg";
      }

      if(this.message === ''){
        this.message = "n";
      }
      this.$router.push({ path: `/shop/${this.selected}/${this.message}` });
    }
  }
};
</script>


