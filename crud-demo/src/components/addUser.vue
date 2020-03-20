<template>
  <div id="app">
    <form>
      <div class="container">
        <div class="card bg-light">
          <div class="d-flex justify-content-center h-200">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <article class="card-body mx-auto" style="max-width: 400px;">
                  <form>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="name"
                        placeholder="enter name"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="username"
                        placeholder="enter username"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model.trim="email"
                        placeholder="enter email"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-row">
                      <button @click.prevent="addUser()">add User</button>
                      <button @click.prevent="editUser()">edit user</button>
                      <br />
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
const url = "http://localhost:3030/users/";
export default {
  data() {
    return {
      name: this.$store.state.users.name,
      username: this.$store.state.users.username,
      email: this.$store.state.users.email
    };
  },
  created() {
    console.log("here");
    this.$children.$on("editUser", user => {
      this.name = user.name;
    });
  },
  methods: {
    addUser() {
      if (!this.name || !this.username || !this.email) {
        alert("enter data");
      } else {
        let payload = {
          name: this.name,
          username: this.username,
          email: this.email
        };
        axios.post(url, payload).then(res => {
          this.$router.push((name = "users"));
        });
      }
    },
  }
};
</script>

    
    