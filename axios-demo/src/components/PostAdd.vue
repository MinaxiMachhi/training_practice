<template>
  <div>
    <div id="add" style="display:block">
      Title
      <input v-model="oldtitle" />
      <br />Body
      <input v-model="oldbody" />

      <button @click="addPost()">Add Post</button>
      <button @click="editPost()">Edit Post</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const url = "http://localhost:3030/posts/";
export default {
  props: ["post", "addpost", "EditKey" , 'oldtitle' , 'oldbody'],
  data() {
    return {
      id: 1,
      title: this.oldtitle,
      body: this.oldbody
    };
  },
  methods: {
    addPost() {
      // document.getElementById("add").style.display = "none";
      axios
        .post(url, {
          userId: 1,
          title: this.oldtitle,
          body: this.oldbody
        })
        .then(res => console.log((this.post = res.data.data)));
      this.$emit("get", this.addpost);
    },
    editPost() {
      axios
        .patch(url + this.EditKey, {
          title: this.oldtitle,
          body: this.oldbody
        })
        .then(res => console.log((this.post = res.data.data)));
      console.log(this.editkey);
      this.$emit("get", this.addpost);
    }
  }
};
</script>