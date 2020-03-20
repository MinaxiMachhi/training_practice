<template>
  <div>
    <h1>welcome</h1>
    <form @submit.prevent="clicked()">
      <div>
        Name :
        <input
          type="text"
          v-model="form.name"
          :class="{'red':isSubmitted && !$v.form.name.required}"
        />
      </div>
      <!-- <div>
        Email :
        <input type="email" v-model="form.email" />
        <div v-if="isSubmitted && !$v.form.email.required">required</div>
        <div v-if="isSubmitted && !$v.form.email.email">Invalid Email</div>
      </div>-->

      <div>
        Email :
        <input
          type="email"
          v-model="form.email"
          :class="{'red':isSubmitted && !$v.form.email.required || !$v.form.email.email }"
        />
      </div>
      <div>
        Password
        <input
          type="password"
          v-model="form.password"
          :class="{'red':isSubmitted && !$v.form.password.required || !$v.form.password.minLength}"
        />
      </div>
      <div>
        Confirm Password
        <input
          type="password"
          v-model="form.confirmpassword"
          :class="{'red':isSubmitted && !$v.form.confirmpassword.required || !$v.form.confirmpassword.sameAsPassword}"
        />
      </div>
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
      confirmpassword: { required, sameAsPassword:sameAs('password') }
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