<template>
  <div id="login">
    <h1>Login Page</h1>
    <br>
    <input placeholder="User Name" type="text" name="username" />
    <br>
    <br>
    <input placeholder="Password" type="password" name="password" />
    <br>
    <br>
    <button class="loginButton" type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
        location.href='/'
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
.loginButton {
  background-color: #e7e7e7;
  color: black;
  border: 2px solid #e7e7e7;
}

.loginButton:hover {background-color: white;}
</style>