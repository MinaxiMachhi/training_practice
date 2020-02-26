<template>
  <div id="app" class="container jumbotron">
    <b-form id="form" @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group label="Email address :" label-for="email">
        <b-form-input
          ref="email"
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />

        <div v-if="error" :class="{'has-error' : checkNull && submitting}">Please fill out this field.</div>
        <div :class="{'has-error' : invalidEmail && submitting && !checkNull}">Please enter valid email.</div>
       </b-form-group>

      <b-button class="btn" type="submit" variant="primary">Submit</b-button>
      <b-button class="btn" type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card header="Form Data Result" v-if="isSubmitted && show">
      <pre>
        <p>{{data.email}}</p>
        </pre>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      isSubmitted: false,
      email: null,
      submitting: false,
      error:false,
      data: {
        email: null
      }
    };
  },

  mounted() {
    this.$refs.email.focus();
  },
  computed: {
    checkNull() {
      if (!this.email) {
        this.error=true;
        return true;
      }
      this.error=false;
      return false;
    },
    invalidEmail() {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(this.email)) {
        return true;
      }
      return false;
    }
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true;
      this.submitting = true;
      this.data = {
        email: this.email
      };
    },

    onReset() {
      this.data = {
        email: null,
      };
      document.getElementsByTagName("Form").value = "";
      this.show = true;
      this.isSubmitted = false;
    }
  }
};
</script>

<style scoped>
#app {
  margin-top: 15px;
}

.btn {
  margin-right: 20px;
}
.has-error {
  border-color: #d33c40;
  color: red;
}
</style>