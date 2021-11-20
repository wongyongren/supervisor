<template>
  <ul class="ulNav" style="text-align: left">
    <li class="liNav"><a href="/">Main Page </a></li>
    <li class="liNav"><a href="/login">Login Page </a></li>
    <li class="liNav"><a href="/report">Report Page </a></li>
    <div class="email" >
      {{ email }}
      <button @click="logOut">sign out</button>
    </div>
  </ul>
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
      location.href = "/login";
    },
  },
};
</script>

<style>
.ulNav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
  width: 100%;
}

.liNav {
  float: left;
}

.liNav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.liNav a:hover {
  background-color: #111;
}
.email {
  text-align: right;
  color: white;
  padding: 14px 16px;
}
</style>