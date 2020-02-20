<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <p>Title: {{post.title}}</p>
      <p :title="post.body">Body: {{post.body | bodyFilter}}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "vue",
          body:
            "Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications."
        },
        {
          id: 2,
          title: "React",
          body:
            "React.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications."
        }
      ]
    };
  },
  filters: {
    bodyFilter(value) {
      if (!value) return "";
      else if (value.length > 10) return value.substring(0, 10) + "...";
      else return value;
    }
  }
};
</script>

<style>
</style>