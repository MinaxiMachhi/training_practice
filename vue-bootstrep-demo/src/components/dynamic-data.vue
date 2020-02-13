<template>
  <div>
    <!--     <div class="row">
      <div class="col-md-12">
      <div>Current Page: {{ currentPage }}</div><br>
        <li v-for="post in posts" :key="post.id">{{ post.id }} ---- {{ post.title }}</li>
      </div>
    </div>-->
    <!-- pagination -->
    <div class="overflow-auto">
      <b-pagination
        size="md"
        v-model="currentPage"
        :total-rows="100"
        :per-page="10"
        aria-controls="my-table"
        @input="getPostData(currentPage)"
      ></b-pagination>
      <div>Current Page: {{ currentPage }}</div>
      <b-table striped id="my-table" :items="posts" :per-page="perPage" :current-page="currentPage" small></b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const api = "https://jsonplaceholder.typicode.com";

export default {
  data() {
    return {
      currentPage: 1,
      limit: 10,
      posts: null
    };
  },
  async created() {
    this.posts = await this.getPosts();
    console.log(this.posts);
  },
  methods: {
    async getPosts() {
      return (
        await axios.get(
          api + "/posts?_page=" + this.currentPage + "&_limit=" + this.limit
        )
      ).data;
    },

    getPostData(currentPage) {
      axios
        .get(
          "http://jsonplaceholder.typicode.com/posts?_page=" +
            this.currentPage +
            "&_limit=" +
            this.limit
        )
        .then(response => {
          this.posts = response.data;
          console.log(currentPage);
        });
    }
  }
};
</script>