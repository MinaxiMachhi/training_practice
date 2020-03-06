<template>
  <div>
    <center>
      <div v-for="item in items" :key="item.id">
        <div class="innercardd" v-for="phone in item.phones" :key="phone.id">
          <b-card :title="phone.name" :img-src="phone.image" img-alt="Image" tag="article" img-left>
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary" @click="addToCart(phone)">Add to Cart</b-button>
            <br />
            <div>
              <b-card-text>Rs.{{phone.price}}</b-card-text>
              <router-link to="#">Show More</router-link>
            </div>
          </b-card>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  created() {
    this.$store.dispatch("getItems");
  },
  methods: {
    addToCart(product) {
      this.$root.$emit("addToCart", product);
    }
  }
};
</script>
<style scoped>
.innercardd {
  width: 570px;
  margin: 2%;
  justify-content: center;
  align-content: center;
}
</style>