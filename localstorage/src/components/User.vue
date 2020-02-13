<template>
<div>
  <button @click="logout()">Logout</button>
  <div id="trainee-table">
    <div class="container">
      <div class="table-wrapper" v-if="currentRoute !== 'UserDetails'">
        <div class="table-title">
          <table border="5px" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tr v-for="(user,index) in users" :key="index">
              <td>{{user.id}}</td>
              <td>{{user.email}}</td>
              <td>
                <img :src="user.avatar" />
              </td>
              <td>
                <button class="btn btn-primary" @click="viewUserDetails()">View</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  watch: {
    $route(to, from) {
      // console.log(to);
      this.currentRoute = to.name;
    }
  },
  data() {
    return {
      users: [],
      currentRoute: null
    };
  },
  async created() {
    this.users = await this.getUsers();
    // console.log(this.$router.currentRoute.name);
  },
  methods: {
    async getUsers() {
      return (await axios.get("https://reqres.in/api/users?page=2")).data.data;
    },
    viewUserDetails() {
      this.$router.push({ name: "UserDetails" });
    },
    logout(){
      localStorage.removeItem("email")
      localStorage.removeItem("password")
      this.$router.push(name= "/")
    }
  }
};
</script>
