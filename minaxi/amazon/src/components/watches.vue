<template>
  <div>
    <center>
      <div v-for="item in items" :key="item.id">
        <div class="innercardd" v-for="watch in item.Watches" :key="watch.id">
          <b-card no-body style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="watch.image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="watch.name">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                  <b-button href="#" @click="addToCart(watch)" variant="primary">Add to Cart</b-button>
                  <b-card-text>Rs.{{watch.price}}</b-card-text>
                  <div>
                    <router-link to="#">Show More</router-link>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
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