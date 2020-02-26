<template>
<div>
    <form :style="{'background-color': 'grey'}">
    <div  v-if="!submitted" class="container">
        <div class="row">
            <div class="col-md-7">
                <h1 class="text-left"> Bacancy Technology </h1>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-6">
                    <h3 class="text-left"> Registration Form </h3>
                </div>
                    <div class="col-md-6">
                    <span class="glyphicon glyphicon-pencil"> </span></div>
                </div>
                <hr>

                <div class="row">
                    <label class="label col-md-2 control-label">Name</label>
                    <div class="col-md-10">
                        <input type="text" v-model.trim="user.name" class="form-control" placeholder="Enter Your Name">
                        <p class="error" v-if="!nameIsValid">* Name Field is Invalid</p>
                    </div>
                </div>

                <div class="row">
                    <label class="label col-md-2 control-label">E-mail</label>
                    <div class="col-md-10">
                        <input type="email" class="form-control"  v-model.trim="user.email" placeholder="Enter Your E-mail">
                        <p class="error" v-if="!emailIsValid">* Email Field is Invalid</p>
                    </div>
                </div>

                <div class="row">
                    <label class="label col-md-2 control-label"> Mobile No.</label>
                    <div class="col-md-10">
                        <input type="tel" number v-model.trim="user.mobile" class="form-control" placeholder="Enter Your Mobile No.">
                        <p class="error" v-if="!mobileIsValid">* Mobile No.is Invalid</p>
                    </div>
                </div>

                <div class="row">
                    <label class="label col-md-2 control-label"> Password </label>
                    <div class="col-md-10">
                        <input type="password" v-model="user.password" class="form-control" placeholder="Enter Your Password">
                        <p class="error" v-if="!passwordIsValid">* Password Field is Invalid because minimum 7 characters required</p>
                    </div>
                </div>

                <div class="row">
                    <label class="label col-md-2 control-label">Gender</label>
                    <div class="col-md-10">
                        <input type="radio" name="gn" value="Male" v-model="user.picked"> <small> Male </small>
                        <input type="radio" name="gn" value="Female" v-model="user.picked"> <small> Female </small>
                    </div>
                </div>

                <div class="row">
                    <label class="label col-md-2 control-label">Country</label>
                    <div class="col-md-10">
                        <select class="form-control">
                            <option>India</option>
                            <option>America</option>
                            <option>Australia</option>
                            <option>Japan</option>
                        </select>
                    </div>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="materialUnchecked" @click="temp()">
                    <label class="form-check-label" for="materialUnchecked"> I accept the terms of use & privacy policy </label>
                </div>

                <div>
                    <input :disabled="!checked" class="btn btn-info" id="submitted" value="Submit" type="submit" @click.prevent="submitForm"/>
                </div>
            </div>
            </div>
    </div>
        <div class="temp" v-if="submitted">
            <h3 style="font-family:sans-serif"> Thanks For Submitting Your Details </h3>
        </div>

        <div style="display:none" id="preview">
            <h3>D E T A I L S</h3>
            <p> <label>Your Name:</label> {{user.name}}    </p>
            <p> <label>Your Email:</label> {{user.email}}   </p>
            <p> <label>Mobile No.:</label> {{user.mobile}}  </p>
            <p> <label>Gender  :</label> {{user.picked}}  </p>
            <p> <label>Password  :</label> {{user.password}}</p>
        </div>
    </form>
</div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      myStyle: {
        backgroundColor: 'grey'
      },
      user: {
        name: '',
        email: '',
        mobile: '',
        password: '',
        picked: ''
      },
      submitted: false,
      checked:false
    }
  },
  computed: {
    nameIsValid () {
      return !!this.user.name
    },
    emailIsValid () {
      var reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      return reg.test(this.user.email)
    },
    mobileIsValid () {
      return this.user.mobile.length != null && this.user.mobile.length === 10
    },
    passwordIsValid () {
      return this.user.password.length > 6
    },
    materialunchecked () {
      return this.checked=true 
    },
    formIsValid () {
      return this.nameIsValid && this.emailIsValid && this.mobileIsValid && this.passwordIsValid
    },
    temp () {
        console.log("this is working")
        var checkbox = document.getElementById('materialUnchecked')
        if(checkbox.checked)
        {
            return this.checked=true
        }
        else {
            return this.checked=false
        }
    } 
    },
  methods: {
    submitForm () {
      if (this.formIsValid) {
        document.getElementById('submitted').onclick = function () {
          alert('Form Is Valid & Submitted')
        }
        console.log('Form Submitted', this.user)
        document.getElementById('preview').style.display = 'block'
      } else {
        document.getElementById('submitted').onclick = function () {
          alert('Form Is Invalid')
        }
        console.log('Form Is Invalid')
      }
      this.submitted = true
      console.log('name :', this.user.name)
      console.log('email :', this.user.email)
      console.log('mobile :', this.user.mobile)
      console.log('password :', this.user.password)
      console.log('hobby :', this.user.checkedNames)
      console.log('gender :', this.user.picked)
    }
  }
}
</script>

<style>
*{
    margin: 0%;
    padding: 0%
}
body{
    background: url(/home/sagar/Desktop/download.jpeg);
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Times New Roman'
}
h1{
    font-size: 60px;
    color: balck;
    margin-top: 400px
}
p{
    font-size: 17px;
    color: white
}
h3{
    font-size: 25px;
    color: white
}
.glyphicon-pencil{
    font-size: 35px;
    color: white;
    float: right;
    margin-top: 20px
}
.col-md-5 {
    margin-top: 80px;
    box-shadow: -1px 1px 60px 10px black;
    background: rgba(0,0,0,0.4)
}
.label {
    font-weight: normal;
    margin-top: 15px;
    color: white;
    font-size: 19px;
}
.form-control {
    background: transparent;
    border-radius: 0px;
    border: 0px;
    border-bottom: 1px solid white;
    font-size: 18px;
    margin-top: 15px;
    height: 40px;
    color: white
}
.col-md-10 {
    padding-left:10%
}
small {
    font-size: 18px;
    color: white
}
input[type="radio"] {
    margin-top: 22px
}
option {
    color: gray
}
.btn-info {
    margin-top: 50px;
    font-size: 18px;
    width: 120px;
    margin-left: 170px;
    margin-bottom: 30px
}
.error{
  font-family: 'Lucida Sans';
  color: red;
  font-size: 17px;
}
#materialUnchecked{
    margin-top:50px;
    margin-left:10%
}
.form-check-label{
    font-size:19px;
    color:white;
    margin-left: 3%
}
</style>