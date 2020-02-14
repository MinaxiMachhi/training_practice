<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- <div class="navbar-nav"></div> -->
        <div class="left">
          <img src="@/assets/bacancy_og.png" height="30px" width="30px" />
          <router-link to="#">  BACANCY TECHNOLOGY   </router-link>
          </div>
        <div class="right">
          <div class="link">
            <img src="@/assets/smilyy.png" @click="smily()" height="30px" width="30px" />
            <router-link to="/">  HOME</router-link>
          </div>
          <div class="link">
            <router-link to="/Registration">REGESTRATION</router-link>
          </div>
          <div class="link">
            <router-link to="/Login">LOGIN</router-link>
          </div>
          <div class="link">
            <router-link to="/User">USER</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <br />
    <!-- <p>Thank You For Visit</p> -->
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {};
  },
  methods:{
    smily(){
      alert("hello!!! have a nice day :)")
    }
  }
};
</script>

<style scoped>
.left {
  width: 30%;
  padding: 1%;
}
.right {
  width: 30%;
  margin-left: 50%;
}
.right .link {
  /* float: right; */
  float: left;
  padding-left: 3%;
}
img {
  border-radius: 50%;
}
</style>