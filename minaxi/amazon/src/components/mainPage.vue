<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar navbar fixed-top">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- <div class="navbar-nav"></div> -->
        <div class="left">
          <img style="height: 20px; width: 85px;" src="@/assets/a.png" />
        </div>
        <div>
          <router-link to="/Home">Home</router-link>
        </div>
        <div class="right">
          <div class="link">
            <span class="badge badge-dark">
              <img class="cartImage" @click="goToCart()" src="@/assets/cart.png" />
              {{totalQuantity}}
            </span>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addToCart: [],
      totalPrice: "0",
      totalQuantity: "0"
    };
  },
  created() {
    this.$root.$on("addToCart", product => {
      console.log("miiiii", this.addToCart);
      product.quantity++;
      var payload = {
        nameOfProduct: product.name,
        quantityOfProduct: product.quantity,
        valOfProduct: product.quantity * product.price
      };
      let record = this.addToCart.find(x => x.nameOfProduct === product.name);
      console.log("productName", record);

      if (record) {
        record.quantityOfProduct = payload.quantityOfProduct;
        record.valOfProduct = payload.valOfProduct;
      } else {
        this.addToCart.push(payload);
        console.log("payload:", payload);
      }

      let sum = 0;
      this.addToCart.forEach(e => (sum += e.quantityOfProduct));
      this.totalQuantity = sum;

      let sumofPrice = 0;
      this.addToCart.forEach(e => (sumofPrice += e.valOfProduct));
      this.totalPrice = sumofPrice;
    });
  },
  beforeDestroy() {
    // off listner
    this.$root.$off("addToCart");
  },
  methods:{
    goToCart(){
      this.$router.push(name="cartList")
    }
  }

};
</script>
<style scoped>
.left {
  width: 30%;
}
.right {
  width: 80%;
  margin-left: 83%;
}
.cartImage {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}
.main {
  height: 450px;
}
.outercard {
  float: left;
  height: 300px;
  width: 270px;
  margin: 5px;
}
.innercard {
  height: 150px;
  width: 104px;
  float: left;
  margin: 5px;
  border: none;
  padding-top: 10px;
}
</style>