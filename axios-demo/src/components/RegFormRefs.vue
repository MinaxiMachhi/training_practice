<template>
  <div id="app">
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <div class="container">
      <div class="card bg-light">
        <article class="card-body mx-auto" style="max-width: 400px;">
          <h5 class="card-title mt-3 text-center">REGISTRATION FORM</h5>
          <hr />
          <form>
            <p v-if="errors.length">!please fill the details</p>

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
                v-on:click.prevent="submitted()"
                class="btn btn-primary btn-block"
              >SUBMIT</button>
            </div>

            <!-- <p v-for="error in errors" :key="error">{{error}}</p> -->
            <div v-if="issubmitted">
              <p>First Name: {{ data.firstname }}</p>
              <p>Last Name:{{ data.lastname }}</p>
              <p>Email:{{ data.email }}</p>
              <p>Phone No:{{ data.phoneno }}</p>
              <p>Password:{{ data.password }}</p>
            </div>
          </form>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      errors: [],
      firstname: null,
      lastname: null,
      email: null,
      phoneno: null,  
      password: null,
      gender: null,
      issubmitted: false,
      isDisabled: false,
      data: {
        firstname: null,
        lastname: null,
        email: null,
        phoneno: null,
        password: null,
        gender: null
      }
    };
  },
  methods: {
    validateForm() {
      this.errors = [];
      if (
        !this.firstname ||
        !this.lastname ||
        !this.email ||
        !this.phoneno ||
        !this.password
      ) {
        this.$refs.firstname.className = "red ";
        this.$refs.lastname.className = "red ";
        this.$refs.email.className = "red ";
        this.$refs.phoneno.className = "red ";
        this.$refs.password.className = "red ";

        if (!this.firstname) {
          this.$refs.firstname.className = "red ";
          return false;
        } else {
          var regex = /^[a-zA-Z\s]+$/;
          if (regex.test(this.firstname)) {
            this.$refs.firstname.className = "";
          } else {
            this.$refs.firstname.className = "red";
            return false;
          }
        }
        if (!this.lastname) {
          this.$refs.lastname.className = "red ";
          return false;
        } else {
          var regex = /^[a-zA-Z\s]+$/;
          if (regex.test(this.lastname)) {
            this.$refs.lastname.className = "";
          } else {
            this.$refs.lastname.className = "red";
            return false;
          }
        }
        if (!this.email) {
          this.$refs.email.className = "red ";
          return false;
        } else {
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (regex.test(this.email)) {
            this.$refs.email.className = "";
          } else {
            this.$refs.email.className = "red ";
            return false;
          }
        }
        if (!this.phoneno) {
          this.$refs.phoneno.className = "red ";
          return false;
        } else {
          var regex = /^[1-9]\d{9}$/;
          if (regex.test(this.phoneno)) {
            this.$refs.phoneno.className = "";
          } else {
            this.$refs.phoneno.className = "red ";
            return false;
          }
        }
      } else return true;
    },
    submitted() {
      console.log(this.validateForm());
      if (this.validateForm()) {
        alert("validate");

        this.issubmitted = true;
        /*     console.log(this.firstname)
            console.log(this.lasttname)
            console.log(this.email)
            console.log(this.phoneno)
            console.log(this.password)  */
        this.data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phoneno: this.phoneno,
          password: this.password,
          gender: this.gender,
          tech: this.tech
        };
      } else {
        //
      }
    }
  }
};
</script>

<style>
.red {
  border-color: red;
}
</style>
