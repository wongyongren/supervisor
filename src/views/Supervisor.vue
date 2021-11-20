<template>
  <Header />
  <br />
  <div class="container">
    <div class="supervisor">
      <h1>Supervisor Page</h1>
      <DateTime />
      <DateTime />
      <Worker />
      <br />
      <button class="button submitButton" @click="submit" color="cust-secondary">Submit</button>
    </div>
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

<style>
.container {
  text-align: center;
  padding: 100px;
  
}
.supervisor{
border: 3px solid #ddd;
padding: 10px;
font-size: 20px;
}
.button {
  background-color: grey; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.submitButton{
  border-radius: 4px;
}
</style>
