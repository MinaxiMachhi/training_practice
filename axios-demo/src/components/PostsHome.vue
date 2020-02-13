<template>
  <div id="trainee-table">
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div v-if="!addpost">
            <div class="col-sm-6">
              <button class="btn btn-primary" @click="addpost='true'">Add Post</button>
              <button class="btn btn-primary" @click="reloadPage()">Refresh</button>
              <input
                type="text"
                v-model.trim="searchQuery"
                @keyup="getFileteredTitle()"
                placeholder="Search title.."
              />
            </div>
            <table border="5px" class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>userId</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tr v-for="(post,index) in posts" :key="post._id">
                <td>{{post.userId}}</td>
                <td :title="post.title">{{ post.title | formateTitle }}</td>
                <td :title="post.body">{{post.body |formateTitle}}</td>

                <td>
                  <button class="btn btn-primary" @click="editPost(index,post._id,post.title,post.body)">Edit</button>
                  <button class="btn btn-primary" @click="deletePost(index,post._id)">Delete</button>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            <PostAdd :post="post" :addpost="addpost" @get="get($event)" :EditKey="EditKey" :oldtitle="oldtitle" :oldbody="oldbody"></PostAdd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PostAdd from "@/components/PostAdd.vue";
// const url="localhost:3030";
export default {
  data() {
    return {
      posts: null,
      addpost: false,
      EditKey: "",
      searchQuery: "",
      oldtitle:"",
      oldbody:"",
      // isSearch:false,
    };
  },
  async created() {
    this.posts = await this.getPosts();
    console.log(this.posts);
  },
  components: {
    PostAdd
  },
  filters: {
    formateTitle(title) {
      if (!title) return "";
      else if (title.length > 10) return title.substring(0, 10) + "...";
      else return title;
    }
  },
  methods: {
    async getPosts() {
      return (await axios.get("http://localhost:3030/posts/")).data.data;
    },
    reloadPage() {
      window.location.reload();
    },
    get() {
      this.addpost = false;
      window.location.reload();
    },
    deletePost(index, key) {
      axios
        .delete("http://localhost:3030/posts/" + key)
        .then(response => console.log(this.posts.splice(index, 1)));
    },
    editPost(index, key,oldtitle,oldbody) {
      this.EditKey = key;
      this.oldtitle = oldtitle;
      this.oldbody = oldbody;
      this.addpost = true;
      console.log(key);
    },
    getFileteredTitle() {
      axios.get("http://localhost:3030/posts/").then(res => {
        if (this.searchQuery) {
          this.posts = res.data.data.filter(posts =>
            posts.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else {
          this.posts = res.data.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  border: 0px solid black;
  padding: 10px 0px;
}
#app {
  color: #566787;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  margin: 25px 0;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #7ff5eb;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
table.table tr th,
table.table tr td {
  border-color: #221f1f;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}

table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
  width: 20%;
}
</style>
</style>
