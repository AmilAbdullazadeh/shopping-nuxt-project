<template>
  <div class="list-group-item d-flex justify-content-between align-items-center">
    <p class="p-0 m-0 w-100 d-flex align-items-center">
      <span>{{ product.title }}</span>
      <span class="price-container badge-warning text-white font-italic rounded p-1 ml-3">{{ product.price }} AZN</span>
    </p>
    <div class="count-container d-flex flex-row justify-content-end mr-3">
      <button @click.prevent="changeCount(false)" class="btn btn-sm btn-outline-danger rounded-0">-</button>
      <input disabled type="text"
             class="form-control form-control-sm w-25  text-center rounded-0 border-left-0 border-right-0"
             v-model="product_count">
      <button @click.prevent="changeCount(true)" class="btn btn-sm btn-outline-success rounded-0">+</button>
    </div>
    <button @click.prevent="addToCart" class="btn btn-sm btn-outline-primary">Add to basket</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_count: 1
    }
  },
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeCount(status) {
      if (!status) {
        if (this.product.product_count > 1) {
          this.product_count--;
        }
      } else {
        this.product_count++
      }
    },
    addToCart() {
      this.$store.dispatch("addToCart", {count: this.product_count, ...this.product});
    }
  }
}
</script>

<style scoped>

</style>