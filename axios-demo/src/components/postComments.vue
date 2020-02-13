<template>
  <div>
    <div v-if="seen">
      <h3>Comments</h3>
      <ul v-for="(comment, index) in comments" :key="index">
        <li>
          <a>{{comment.name}}</a>
        </li>
      </ul>
    </div>
    <button @click="editTitle()">Edit</button>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";
export default {
  name: "postComments",
  props: ["post", "seen"],
  data() {
    return {
      comments: []
    };
  },
  // computed: {
  //   getPost () {
  //     return this.post
  //   }
  // },
  mounted() {
    this.getComments(this.post.id);
  },
  methods: {
    async getComments(id) {
      let commentUrl = url + "/comments?postId=" + id;
      this.comments = (await axios.get(commentUrl)).data;
    },
    editTitle() {
      this.$emit("edit", this.post.title);
    }
  }
};
</script>