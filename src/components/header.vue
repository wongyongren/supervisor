<template>
<div style="text-align: left"> 
  <a href="/">Main Page </a>
  <a href="/login">Login Page </a>
  <a href="/report">Report Page </a>
</div>
  <div style="text-align: right">
    <span class="mx-2">{{ email }} </span>
    <button @click="logOut" color="cust-secondary">sign out</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "wongyongren@alric.com",
    };
  },
    methods: {
    logOut: function () {
        location.href='/login'
    },
  },
};
</script>