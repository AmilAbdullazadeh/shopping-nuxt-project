<template>
  <tr class="bg-custom-color">
    <td class="p-2">{{ item.title }}</td>
    <td class="p-2 text-center w-25">
      <div class="d-flex flex-row justify-content-center p-0 m-0">
        <button @click="changeCount(-1)" class="btn btn-sm btn-outline-danger rounded-0">-</button>
        <input disabled type="text"
               class="form-control form-control-sm w-25  text-center rounded-0 border-left-0 border-right-0"
               v-model="product_count">
        <button @click="changeCount(1)" class="btn btn-sm btn-outline-success rounded-0">+</button>
      </div>
    </td>
    <td class="p-2 text-center">{{ item.price }} AZN</td>
    <td class="p-2 text-center">{{ item.totalPrice }} AZN</td>
    <td class="p-2 text-center">
      <button class="btn btn-sm btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  computed: {
    product_count() {
      return this.item.count
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeCount(value) {
      if (value === -1 && this.item.count === 1) {
        this.$store.dispatch("removeProduct", this.item)
      } else {
        this.item.count += value
        this.$store.dispatch("changeCount")
      }
    },
    remove() {
      this.$store.dispatch("removeProduct", this.item)
    }
  }
}
</script>

<style scoped>

</style>