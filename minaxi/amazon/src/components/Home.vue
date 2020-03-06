 <template>
  <div class="main">
    <div class="outercard" v-for="item in items" :key="item.id">
      <b-card>
        <b-card-text>{{item.name}}</b-card-text>
        <div class="innercard" v-for="phone in item.phones" :key="phone.id">
          <router-link :to="'/'+phone.name">
            <b-card
              :img-src="phone.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="innercard"
            >
              <b-card-text>{{phone.name}}</b-card-text>
            </b-card>
          </router-link>
        </div>
        <div class="innercard" v-for="laptop in item.laptops" :key="laptop.id">
          <router-link :to="'/'+laptop.name">
            <b-card
              :img-src="laptop.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="innercard"
            >
              <b-card-text>{{laptop.name}}</b-card-text>
            </b-card>
          </router-link>
        </div>
        <div v-for="watch in item.Watches" :key="watch.id">
          <router-link :to="'/'+watch.name">
            <b-card
              :img-src="watch.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="innercard"
            >
              <b-card-text>{{watch.name}}</b-card-text>
            </b-card>
          </router-link>
        </div>
        <div class="innercard" v-for="shoes in item.shoes" :key="shoes.id">
          <router-link :to="'/'+shoes.name">
            <b-card
              :img-src="shoes.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="innercard"
            >
              <b-card-text>{{shoes.name}}</b-card-text>
            </b-card>
          </router-link>
        </div>
      </b-card>
    </div>
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
};
</script>

<style>
.main {
  height: 450px;
}
.outercard {
  float: left;
  height: 340px;
  width: 270px;
  margin: 5px;
}
.outercard .innercard {
  height: 170px;
  width: 104px;
  float: left;
  margin: 5px;
  border: none;
  padding-top: 10px;
}
</style>