<template>
  <div>
    <h1>Customer</h1>
    <p>I see {{totalTvCount}} TVs</p>
    <p v-show="!totalTvCount">I can't buy any</p>
    <button :disabled="!totalTvCount" @click="buyTv()">Buy Tv</button>
  </div>
</template>

<script>
/*eslint-disable*/
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["totalTvCount"])

    // totalTvCount(){
    //   return this.$store.state.totalTvCount
    // }
  },
  methods: {
    ...mapActions(["removeTv"]),

    buyTv() {
      this.removeTv(1);
    }

    // buyTv(){
    //   this.$store.dispatch('removeTv',1)
    // }
  }
};
</script>

<style>
</style>
