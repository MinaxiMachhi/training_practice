<template>
  <div>
    <button @click="getDate()">Date</button>
    <hr />
    {{date}}
    <hr />
    {{temp}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      temp: ""
    };
  },
  methods: {
    getDate() {
      let d = new Date();
      this.date = d;
      this.temp = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    }
  }
};
</script>

<style>
</style>