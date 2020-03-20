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
                      <button @click.prevent="addPosts()">Post Data</button>
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
const url = "http://localhost:3030/posts/";
export default {
  data() {
    return {
      addposts: []
    };
  },
  methods: {
    addPosts() {
      if (!this.name || !this.username || !this.email) {
        alert("enter data");
      } else {
        let payload = {
          name: this.name,
          username: this.username,
          email: this.email
        };
        axios.post(url, payload).then(res => {
          this.$router.push((name = "posts"));
        });
      }
    }
  }
};
</script>

    
    