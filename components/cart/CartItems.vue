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
    <tr v-for="(item, index) in cart" :key="index" class="bg-custom-color">
      <td class="p-2">{{ item.title }}</td>
      <td class="p-2 text-center w-25">
        <div class="d-flex flex-row justify-content-center p-0 m-0">
          <button class="btn btn-sm btn-outline-danger rounded-0">-</button>
          <input disabled type="text"
                 class="form-control form-control-sm w-25  text-center rounded-0 border-left-0 border-right-0"
                 :value="item.count">
          <button class="btn btn-sm btn-outline-success rounded-0">+</button>
        </div>
      </td>
      <td class="p-2 text-center">{{ item.price }} AZN</td>
      <td class="p-2 text-center">{{ item.totalPrice }} AZN</td>
      <td class="p-2 text-center">
        <button class="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CartItems",
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