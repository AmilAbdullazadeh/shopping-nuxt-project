<template>
  <div class="cart-footer mt-auto">
    <div class="total-price d-flex justify-content-end align-items-center rounded-0">
      <strong style="font-size: 18px;">Totally price : </strong>
      <span class="badge total-price-container rounded-0">{{ cartTotalPrice.toFixed(2) }} AZN</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartFooter",
  computed: {
    cartTotalPrice() {
      return this.$store.getters.getTotalPrice
    }
  }
}
</script>

<style scoped>

</style>