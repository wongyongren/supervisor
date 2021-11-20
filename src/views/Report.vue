<template>
  <Header />
  <div class="container" style="text-align:center;padding:50px">
  <h1>Report Page</h1>
  <div><h2>Date : {{ date.getUTCDate() + "-" +date.getUTCMonth() + "-" +date.getUTCFullYear() }}</h2></div>
  <ReportList />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ReportList from "../components/ReportList.vue";

export default {
  name: "Report",
  components: {
    Header,
    ReportList
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style>
</style>