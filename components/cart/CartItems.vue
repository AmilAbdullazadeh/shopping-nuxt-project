<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
    <th class="text-center">Product name</th>
    <th class="text-center">Quantity</th>
    <th class="text-center">Price</th>
    <th class="text-center">Total</th>
    <th class="text-center">Delete</th>
    </thead>
    <tbody>
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
    </tbody>
  </table>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
export default {
  name: "CartItems",
  components: {CartItem},
  props: {
    cart: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>

</style>