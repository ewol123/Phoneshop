<template>
  <div>
      <productform page="edit" :params="id"></productform>
  </div>
</template>

<script>
 import productform from '../../components/product/productform';
  export default {
      components: {
        'productform':productform        
      },
      data(){
        return {
          id: this.$route.params.id
        }
      }
  }
</script>
