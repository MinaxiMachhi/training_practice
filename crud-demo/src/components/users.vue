<template>
  <div class="container">
    <button class="glyphicon glyphicon-plus" @click="addUser()">ADD User</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in users" :key="user._id">
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>
            <button class="glyphicon glyphicon-pencil" @click="editUser(user._id)"></button>
            <button class="glyphicon glyphicon-remove" @click="deleteUser(index,user._id,index)"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
const url = "http://localhost:3030";
export default {
  created() {
    this.getUsers();
  },
  computed: {
    users() {
      console.log("aa", this.$store.state.users);
      return this.$store.state.users;
    }
  },
  methods: {
    getUsers() {
      axios
        .get(url + "/users")
        .then(res => (this.$store.state.users = res.data.data));
    },
    addUser() {
      this.$router.push((name = "addUser"));
    },
    deleteUser(index, key) {
      axios
        .delete("http://localhost:3030/users/" + key)
        .then(response =>
          console.log(this.$store.state.users.splice(index, 1))
        );
    },
    editUser(id) {
      this.$store.dispatch("editUser", id );
      this.$router.push((name = "addUser"));
    }
  }
};
</script>
