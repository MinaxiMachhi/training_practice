<template>
  <div>
    <h2>welcome</h2>
    <form @submit.prevent="clicked()">
      <b-row>
        <b-col cols="2">
          <label>Name</label>
        </b-col>
        <b-col cols="6">
          <input
            type="text"
            v-model="form.name"
            :class="{'red':isSubmitted && !$v.form.name.required}"
          />
        </b-col>
      </b-row>
      <!-- <div>
        Email :
        <input type="email" v-model="form.email" />
        <div v-if="isSubmitted && !$v.form.email.required">required</div>
        <div v-if="isSubmitted && !$v.form.email.email">Invalid Email</div>
      </div>-->

      <b-row>
        <b-col cols="2">
          <label for="name">Email</label>
        </b-col>
        <b-col cols="6">
          <input
            type="email"
            v-model="form.email"
            :class="{'red':isSubmitted && !$v.form.email.required || !$v.form.email.email }"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label for="name" class="mr-lg-2">Password</label>
        </b-col>
        <b-col cols="6">
          <input
            type="password"
            v-model="form.password"
            :class="{'red':isSubmitted && !$v.form.password.required || !$v.form.password.minLength}"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label for="name">Confirm Password</label>
        </b-col>
        <b-col cols="6">
          <input
            type="password"
            v-model="form.confirmpassword"
            :class="{'red':isSubmitted && !$v.form.confirmpassword.required || !$v.form.confirmpassword.sameAsPassword}"
          />
        </b-col>
      </b-row>
      <button>click</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      isSubmitted: false,
      form: {
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmpassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    clicked() {
      this.isSubmitted = true;
      console.log("name", this.form.name);
    }
  }
};
</script>

<style>
.red {
  border-color: red;
}
</style>