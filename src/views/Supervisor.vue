<template>
  <div class="">
    <Header />
    <h1>Supervisor Page</h1>
    <DateTime />
    <DateTime />
    <Worker />
    <button @click="submit" color="cust-secondary">Submit</button>
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from "@/components/DateTime.vue";
import Worker from "@/components/Worker.vue";
import Header from "../components/header.vue";

export default {
  name: "Supervisor",
  components: {
    DateTime,
    Worker,
    Header,
  },
  methods: {
    submit: function () {
      location.href = "/report";
    },
  },
};
</script>
