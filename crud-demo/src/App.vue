<template>
  <div id="app">
    <!-- <home-page/> -->
    <Vuelidate-Demo/>
  </div>
</template>
<script>
import HomePage from '@/components/HomePage.vue'
import VuelidateDemo  from '@/components/VuelidateDemo.vue'
export default {
  components:{
    HomePage,
    VuelidateDemo
  }
  
}
</script>