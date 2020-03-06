<template>
  <div>
    <div>
      <h3 style="font-family:verdana">CART LIST</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart,index) in addToCart" :key="index">
            <td>{{cart.nameOfProduct}}</td>
            <td>{{cart.quantityOfProduct}}</td>
            <td>{{cart.valOfProduct}}</td>
          </tr>
        </tbody>
        <tbody></tbody>
        <tbody>
          <tr>
            <th>total</th>
            <td>{{totalQuantity}}</td>
            <td>
              <b>{{totalPrice}}</b>
            </td>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>