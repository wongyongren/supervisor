<template >
  <div v-for="site in sites" :key="site">
    <br />
    <h3>{{ site.location }}</h3>
    <div v-for="name in sites.worker" :key="name">
      {{name}}
      <li>{{ site.worker[0].name }}</li>
    </div>
  </div>
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
            },
            {
              id: 2,
              name: "ABC",
            },
          ],
        },
        {
          location: "8 Tier",
          worker: [
            {
              id: 1,
              name: "Wong",
            },
            {
              id: 2,
              name: "ABC",
            },
          ],
        },
        {
          location: "Apollo",
          worker: [
            {
              id: 1,
              name: "Wong",
            },
            {
              id: 2,
              name: "ABC",
            },
          ],
        },
        {
          location: "Panda",
          worker: [
            {
              id: 1,
              name: "Wong",
            },
            {
              id: 2,
              name: "ABC",
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