<template>
  <div id="app">
    <div class="container">
      <div class="card bg-light">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-200">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <div class="brand_logo_container">
                  <img
                    src="@/assets/bacancy_og.png"
                    class="brand_logo"
                    alt="Logo"
                    height="100px"
                    width="100px"
                  />
                  <div class="d-flex justify-content-center form_container">
                    <article class="card-body mx-auto" style="max-width: 400px;">
                      <hr />
                      <form>
                        <div class="form-group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fa fa-user"></i>
                            </span>
                          </div>
                          <input
                            v-model.trim="email"
                            placeholder="email"
                            class="form-control"
                            type="text"
                          />
                        </div>
                        <div class="form-group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fa fa-lock"></i>
                            </span>
                          </div>
                          <input
                            v-model.trim="password"
                            class="form-control"
                            placeholder="Password"
                            type="password"
                            ref="password"
                          />
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            @click="login()"
                            class="btn btn-primary btn-block"
                          >LOGIN</button>
                        </div>
                      </form>
                      <p>
                        Create an account?
                        <router-link to="/Registration">Register</router-link>
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      let email = localStorage.getItem("email");
      let password = localStorage.getItem("password");

      if (this.email == email && this.password == password) {
        this.$router.push((name = "/User"));
      } else {
        this.$router.push((name = "/Login"));
        alert("Invalid creadentials");
      }
    }
  }
};
</script>
<style scoped>
img{
  border-radius: 50%;
}
</style>
