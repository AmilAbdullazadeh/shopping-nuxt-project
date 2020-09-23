<template>
  <div class="cart-container card shadow">
    <h3 class="text-center ">Cart</h3>
    <Alert/>
    <CartItems :cart="cart"/>
    <CartFooter/>
  </div>
</template>

<script>
import Alert from "~/components/cart/Alert";
import CartItems from "~/components/cart/CartItems";
import CartFooter from "~/components/cart/CartFooter";

export default {
  name: "Cart",
  components: {CartFooter, CartItems, Alert},
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