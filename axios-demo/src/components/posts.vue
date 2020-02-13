<template>
  <div>
    <ul v-for="(post,id) in posts" :key="id">
      <a href="javascript:void(0)" @click="seen=!seen">{{post.title}}</a>
      <post-comments :post="post" :seen="seen" @edit="editTitle($event)"></post-comments>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import postComments from "@/components/postComments.vue";
const url = "https://jsonplaceholder.typicode.com";
export default {
  data() {
    return {
      posts: null,
      seen: false
    };
  },
  components: {
    postComments
  },
  async created() {
    this.posts = await this.getPosts();
  },
  methods: {
    async getPosts() {
      let url1 = url + "/posts";
      return (await axios.get(url1)).data;
    },
    editTitle(posttitle) {
      let oldtitle = console.log(posttitle);
      let newtitle = console.log(prompt("hello"));
      //axios.patch(url+"/posts",)
    }
  }
};
</script>