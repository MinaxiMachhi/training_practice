<template>
  <div id="app">
    <!-- <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    /> -->
    <div class="container">
      <div class="card bg-light">
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
                ref="lastname"
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
                v-on:click.prevent="submit()"
                class="btn btn-primary btn-block"
              >SUBMIT</button>
            </div>
          </form>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data(){
    return{
      user:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    submit(){
      localStorage.setItem("email",this.email)
      localStorage.setItem("password",this.password)
      alert("Registration successful")
      this.$router.push(name="/Login")
    }
  }
}
</script>
<style scoped>

</style>