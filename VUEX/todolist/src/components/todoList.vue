<template>
  <div class="hello">
    <div class="left">
      <h1>Todo-list</h1>
      <form @submit.prevent="addTodo()">
        <input class="link-input" type="text" placeholder="Add a Link" v-model="newTodo" />
      </form>
      <ul>
        <li v-for="(list,inx) in todolist" :key="inx">
          {{list}}
          <button @click="removeTodo(inx)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    ...mapState(["todolist"])
  },
  methods: {
    ...mapMutations(["ADD_TODO"]),
    ...mapMutations(["REMOVE_TODO"]),

    addTodo() {
      this.ADD_TODO(this.newTodo);
        this.newTodo = ''
    },
    removeTodo(inx) {
      this.REMOVE_TODO(inx);
    }
  }
};
</script>

<style>
.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}
.left {
  padding: 30px;
  background-color: #E9E9E9;
}
input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px powderblue;
  margin-bottom: 50px;
  outline: none;
}
ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }


.right {
  grid-area: right;
  background-color: #e9e9e9;
}
.rm {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
</style>