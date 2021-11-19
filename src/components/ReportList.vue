<template >
  <div v-for="site in sites" :key="site" class="row box">
    <h3>{{ site.location }}</h3>

    <div v-for="worker in site.worker" :key="worker" class="">
      <!--time in -->
      <div v-if="worker.timeIn != null && worker.timeOut == null">
        <li>{{ worker.name }} - {{ worker.timeIn }}</li>
      </div>
      <!--time in & out -->
      <div v-if="worker.timeOut != null">
        <li>{{ worker.name }} - {{ worker.timeIn }} - {{ worker.timeOut }}</li>
      </div>
    </div>
  </div>
  <button v-print>Print the entire page</button>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          location: "Suzhou",
          worker: [
            {
              id: 1,
              name: "Wong",
              timeIn: "10:05:15 AM",
              timeOut: "12:05:15 PM",
            },
            {
              id: 2,
              name: "ABC",
              timeIn: "10:05:15 AM",
              timeOut: null,
            },
            {
              id: 3,
              name: "Wong",
              timeIn: "10:05:15 AM",
              timeOut: null,
            },
            {
              id: 4,
              name: "ABC",
              timeIn: "10:05:15 AM",
              timeOut: "11:05:15 AM",
            },
          ],
        },
        {
          location: "8 Tier",
          worker: [
            {
              id: 1,
              name: "Wong",
              timeIn: "123",
              timeOut: "123",
            },
            {
              id: 2,
              name: "ABC",
              timeIn: "123",
              timeOut: "123",
            },
          ],
        },
        {
          location: "Apollo",
          worker: [
            {
              id: 1,
              name: "Wong",
              timeIn: "123",
              timeOut: "123",
            },
            {
              id: 2,
              name: "ABC",
              timeIn: "123",
              timeOut: "123",
            },
          ],
        },
        {
          location: "Panda",
          worker: [
            {
              id: 1,
              name: "Wong",
              timeIn: "123",
              timeOut: "123",
            },
            {
              id: 2,
              name: "ABC",
              timeIn: "123",
              timeOut: "123",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>