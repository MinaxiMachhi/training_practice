<template>
  <div>
    <h1>hello</h1>
    <h2>{{count}}</h2>
    <ul>
      <li v-for="user in users" :key="user.name">{{user.name}}</li>
    </ul>
    <input type="text" v-model="name" />
    <button @click="getName()">Click Here</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    count() {
      this.$store.dispatch("increment"); //output 1
      return this.$store.state.count;
    },
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    getName() {
      this.$store.commit("newName", this.name);
      console.log(this.$store.state.updatedName)
    }
  }
};
</script>

<style>
</style>