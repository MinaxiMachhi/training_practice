<template>
  <div>
    <!-- {{msg}} -->
    <div id="trainee-table">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />

      <div class="container">
        <div class="table-wrapper">
          <div class="table-title">
            <table border="5px" class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>userId</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tr v-for="(post) in posts" :key="post._id">
                <td>{{post.userId}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>

                <td>
                  <button class="glyphicon glyphicon-trash">Edit</button>
                  <button
                    class="glyphicon glyphicon-trash"
                  >Delete</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "hello",
      posts: null
    };
  },
  methods: {
    success() {
      alert((this.msg = "ahhhaaaaaaaaaaaaaaa"));
    },
    getData() {
      axios
        .get("http://localhost:3030/posts/")
        .then(res => console.log((this.posts = res.data.data)));
    }
  }
};
</script>
