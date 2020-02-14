<template>
  <div id="app">
    <!-- <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />-->
    <div class="container">
      <div class="card bg-light">
        <div class="d-flex justify-content-center h-200">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container"><br>
                <img
                  src="@/assets/bacancy_og.png"
                  class="brand_logo"
                  alt="Logo"
                  height="100px"
                  width="100px"
                />
                <article class="card-body mx-auto" style="max-width: 400px;">
                  <h5 class="card-title mt-3 text-center">REGISTRATION FORM</h5>
                  <hr />
                  <form>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="firstname"
                        placeholder="First name"
                        class="form-control"
                        type="text"
                        ref="firstname"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="lastname"
                        class="form-control"
                        placeholder="Last name"
                        type="text"
                      />
                    </div>

                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="email"
                        class="form-control"
                        placeholder="email"
                        type="email"
                        ref="email"
                      />
                    </div>

                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-phone"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="phoneno"
                        class="form-control"
                        placeholder="phoneno"
                        type="number"
                        ref="phoneno"
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
                        v-on:click.prevent="Register()"
                        class="btn btn-primary btn-block"
                      >REGISTER</button>
                    </div>
                  </form>
                </article>
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
      email: "",
      password: ""
    };
  },
  methods: {
    Register() {
      if (this.validateForm()) {
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
        alert("Registration successful");
        this.$router.push((name = "/Login"));
      } else return false;
    },
    validateForm() {
      if (!this.email || !this.password) {
        this.$refs.email.style.borderColor = "red ";
        this.$refs.password.style.borderColor = "red ";

        if (!this.email) {
          this.$refs.email.style.borderColor = "red ";
          return false;
        } else {
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (regex.test(this.email)) {
            this.$refs.email.style.borderColor = "";
          } else {
            this.$refs.email.style.borderColor = "red ";
            return false;
          }
        }
      } else return true;
    }
  }
};
</script>
<style scoped>
img {
  border-radius: 50%;
}
.red {
  border-color: red;
}
</style>
