<template>
  <div>
    <input type="button" @click="clickCheck()" value="ClickMe" />
    <input type="button" @click="getPost()" value="Get Post">
    <!-- <SubRefs ref="check"></SubRefs> -->
    <SubRefs ref="getpost"></SubRefs>
  </div>
</template>
<script>
import SubRefs from "@/components/SubRefs.vue";
export default {
  components: {
    SubRefs
  },
  data(){
      return{
      }
  },
  methods: {
    clickCheck() {
      this.$refs.check.success();
    },
    getPost(){
        this.$refs.getpost.getData();
    }
  }
};
</script>
