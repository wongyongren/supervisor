<template>
  <Nav />

</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  components: {
    Nav,
  },
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