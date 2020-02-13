<template>
  <div>
    <!--    Name:
     <input type="text" ref="name" v-model="name" />
    <br />address:
    <br />
    <input type="text" ref="address" v-model="address" />
    <br />
    <br />
    <input type="button" @click.prevent="checkName()" value="submit" />
    <br />
    <br />Email:
    <input type="email" ref="email" v-model="email" />
    <input type="button" @click.prevent="checkEmail()" value="submit" />
    <br />

    <div v-if="isSubmitted">{{email}}</div>
    <br />

    <select ref="select" @click="getValue">
      <option value="BMW">BMW</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Audi">Audi</option>
      <option value="Hyundai">Hyundai</option>
    </select>
    <br />
    You select {{value}} :)
    <br><br>
    
    <p v-for='no in 10' :key="no" ref='no'>This is no {{no}} *2= {{no*2}}</p>
    <input type="button" value="submit" @click="mul()">-->
    {{count}}
    <input type="button" value="counter" @click="incCounter()" /><br>
    <input type="text" ref="id" v-model="id">
    <input type="button" value="mul" @click="mul"> 
    <div v-if="isSubmitted"><div v-for="no in parseInt(id)" :key="no">{{no}}*2 =={{no*2}}</div></div>
  </div>
</template>
<script>  
export default {
  data() {
    return {
      name: "",
      address: "",
      email: "",
      isSubmitted: false,
      value: null,
      count: "",
      id:[],
    };
  },
  methods: {
    /*     checkName() {
      if (this.name == "bacancy" && this.address == "bacancy") {
        this.$refs.name.className = "green"; //using classname
        this.$refs.address.className = "green";
      } else {
        this.$refs.name.className = "red";
        this.$refs.address.className = "red";
      }

      // console.log(this.$refs);
      console.log(this.$refs.name.baseURI); //baseURI
    },
    checkEmail() {
      if (
        !this.email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        )
      ) {
        this.$refs.email.style = "border-color:red"; //using style
      } else {
        this.$refs.email.style = "border-color:green";
        this.issubmitted = true;
      }
    },

    getValue() {
      this.value = this.$refs.select.value;
    },
    mul(){
      console.log(this.$refs);
    }
 */
    incCounter() {
      this.count++;
    },
    mul(){
      this.isSubmitted=true;
      console.log(this.id=this.$refs.id.value);
    }
  }
};
</script>

<style scoped>
.red {
  border-color: red;
}
.green {
  border-color: green;
}
</style>