<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav"></div>
        <div class="nav-item nav-link">
          <router-link to="/">HOME</router-link>
        </div>
        <div class="nav-item nav-link">
          <router-link to="/Registration">Registration</router-link>
        </div>
        <div class="nav-item nav-link">
          <router-link to="/Login">Login</router-link>
        </div>
        <div class="nav-item nav-link">
          <router-link to="/User">User</router-link>
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
    return {
    };
  },
};
</script>