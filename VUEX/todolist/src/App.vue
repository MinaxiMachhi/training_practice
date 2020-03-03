<template>
  <div id="app">
    <todo-list />
  </div>
</template>
<script>
import todoList from "@/components/todoList.vue";
export default {
  components: {
    todoList
  }
};
</script>