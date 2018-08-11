<template>

  <div>
    <product-details :product="product" page="detail" :isAdding="true"></product-details>
  </div>
</template>

<script>
import productdetails from "../../components/product/productdetails";
export default {
  mounted() {
    this.$store.dispatch("productById", { id: this.$route.params["id"] });

    console.log("details product: ", this.product);
  },

  computed: {
    product() {
      return this.$store.getters.productById;
    }
  },
  data() {
    return {
      //        product: this.$store.getters.productById(this.$route.params['id'])
    };
  },
  components: {
    "product-details": productdetails
  }
};
</script>
