<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>

      <div class="container">
        <div class="main">
        <div class="form-row">
          <i class="fa fa-user icon"></i>
          <input type="text" v-model.trim="firstname" class="form-input" placeholder="FirstName" />
        </div>

        <div class="form-row">
          <i class="fa fa-user icon"></i>
          <input type="text" v-model="lastname" class="form-input" placeholder="LastName" />
        </div>

        <div class="form-row">
          <i class="fa fa-envelope icon"></i>
          <input v-model="email" type="email" class="form-input" placeholder="email" />
        </div>
        <div class="form-row">
          <button @click.prevent="postData()">Post Data</button>
          <br />
        </div>
        <div class="form-row">
          <input v-model="id" class="form-input" placeholder="id" />
        </div>
        <div class="form-row">
          <button @click.prevent="getData()">Get Data</button>
          <br />
        </div>
        <br />
        <div class="form-row">
          <button @click.prevent="patchData()">Patch Data</button>
        </div>
        <br />
        <br />
      </div>
      </div>
    </form>
    <table border="5px" class="table table-striped table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tr v-for="(data,index) in users" :key="data._id">
        <td>{{data.firstname}}</td>
        <td>{{data.lastname}}</td>
        <td>{{data.email}}</td>
        <td>
          <button class="glyphicon glyphicon-trash" @click.prevent="deleteData(index,data._id)"></button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
const url = "http://localhost:3030/users/";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      id: "",
      users: []
    };
  },
  methods: {
    postData: function() {
      axios
        .post(url, {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email
        })
        .then(response => console.log(this.users.push(response.data)));
    },
    getData: function() {
      axios
        .get(url + this.id)
        .then(response => console.log(response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteData(index, key) {
      axios
        .delete(url + key)
        .then(response => console.log(this.users.splice(index, 1)));
    },
    patchData() {
      axios
        .patch(url + this.id, {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email
        })
        .then(response => console.log(response.data));
    }
  }
};
</script>

<style>

body{
  justify-content: center
}
.main {
  width: 250px;
}
.form-row {
  position: relative;
  margin-bottom: 30px;
  border-bottom: 2px solid #ccc;
}
.form-row .form-input {
  padding: 9px 0;
  color: #666;
} /*-- main --*/
.icon {
  padding: 9px;
  background: dodgerblue;
  color: white;
  min-width: 18px;
  text-align: center;
}
button {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 0.9em;
  color: #fff;
  background: steelblue;
  outline: none;
  border: 1px solid #76b852;
  cursor: pointer;
  letter-spacing: 4px;
}
</style>