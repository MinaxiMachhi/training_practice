<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand nav-link">@MInaxi</router-link>
        <router-link to="/posts" class="navbar-brand nav-link">Posts</router-link>|
        <router-link to="/vue-bootstrape" class="navbar-brand nav-link">Bootstrape</router-link>|
        <router-link to="/form" class="navbar-brand nav-link">Form</router-link>|
        <router-link to="/validateForm" class="navbar-brand nav-link">ValidateForm</router-link>
        <router-link to="/Carousel" class="navbar-brand nav-link">Carousel</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
