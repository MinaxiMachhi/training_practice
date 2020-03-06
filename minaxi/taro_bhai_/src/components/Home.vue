<template>
  <div>
    <div class="card" v-for="post in posts" :key="post.id">
      <b-card
        title
        :img-src="post.image"
        img-alt="Image"
        style="max-width: 200px;"
        tag="article"
        img-top
      >
        <span class="badge badge-light">
          <img src="@/assets/like.png" style="max-width: 20px;" />
          {{post.like}}
        </span>
         <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Comment"
            aria-label="Search"
          />
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>
<style scoped>
.card {
  margin: 5px;
  float: left;
  border: none;
}
</style>
