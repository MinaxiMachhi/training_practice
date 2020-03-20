<template>
</template>
<script>
import axios from "axios";
const url = "http://localhost:3030";
export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.posts = await this.getPosts();
    console.log("errrr", this.posts);
  },
  methods: {
    async getPosts() {
      return (await axios.get(url + "/posts/")).data.data;
    },
    addPost() {
      this.$router.push((name = "addPost"));
    },
    deletePost(index, key) {
      axios
        .delete("http://localhost:3030/posts/" + key)
        .then(response => console.log(this.posts.splice(index, 1)));
    }
  }
};
</script>

<style>
</style>