<template>
  <div id="app">
    <p>Please ask your question :</p>
    <input v-model="question" @input="getQuestion()" />
    <p>{{answer}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      question: "",
      answer: "I can not give you answer until you ask a question!"
    };
  },
  methods: {
    getQuestion: function() {
      this.answer = "Waiting for you to stop typing...";
      var me = this;
      setTimeout(function() {
        return me.getAnswer();
      }, 500);
    },
    getAnswer: function() {
      var checkString = this.question.match(/^[a-z].*?[/[?=]/g);
      if (this.question.includes("?")) {
        this.question = this.question.replace(/\?.$/g, "?");
        if (
          this.question.slice(-1) === "?" &&
          this.question.match(checkString)
        ) {
          this.answer = "Thinking...";
        } else {
          this.answer = "You should ask proper question.";
          return;
        }
      } else {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = response.data.answer;
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>