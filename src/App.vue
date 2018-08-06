<template>
  <div id="app" >

    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '../src/components/navigation.vue'

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cart;
    }
  },
  components: {
    "navigation":navigation
  }
};
</script>

<style>
</style>
