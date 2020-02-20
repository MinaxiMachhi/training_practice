<template>
  <div>
    <center>
      <input type="text" v-model="Text" />
      <hr />
      Reverse(filter) : {{Text | toReverseText}}
      <hr />
      Text Length(filter) : {{Text | toCountCharacter}}
      <hr />
      Reverse(computed) : {{toReverseText}}
      <hr />
      Text Length(computed) : {{toCountCharacter}}
      <hr />
      Reverse(mixin) : {{toReverseMixin}}
      <br />

      <br />

      <br />
      <br />
    </center>
  </div>
</template>

<script>
import mymixin from "./mixin";
export default {
  mixins: [mymixin],
  data() {
    return {
    };
  },
  filters: {
    //reverse string
    toReverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
    /*     //count character
    toCountCharacter(value) {
      return value.length;
    }
 */
  },
  computed: {
    toReverseText() {
      return this.Text.split("")
        .reverse()
        .join("");
    },
    toCountCharacter() {
      return this.Text.length;
    }
  }
};
</script>

<style>
</style>