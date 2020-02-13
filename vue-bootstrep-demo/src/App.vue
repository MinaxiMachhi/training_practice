<template>
  <div id="app">
      
    <!-- <bootstrep /> -->
    <dynamicdata/>
  </div>
</template>

<script>
import bootstrep from "@/components/bootstrep.vue";
import dynamicdata from "@/components/dynamic-data.vue"
export default {
  components: {
    bootstrep,
    dynamicdata
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
