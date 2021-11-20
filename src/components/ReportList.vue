<template >
  <table v-for="site in sites" :key="site" id="customers">
    <tr>
      <th>{{ site.location }}</th>
      <th>Worker In Time</th>
      <th>Worker Out Time</th>
    </tr>
    <tr v-for="worker in site.worker" :key="worker">
      <!--time in -->
      <td v-if="worker.timeIn != null && worker.timeOut == null">
        {{ worker.name }}
      </td>
      <td v-if="worker.timeIn != null && worker.timeOut == null">
        {{ worker.timeIn }}
      </td>
      <td v-if="worker.timeIn != null && worker.timeOut == null">
        NULL
      </td>
      <!--time in & out -->
        <td v-if="worker.timeOut != null">
          {{ worker.name }} 
        </td>
        <td v-if="worker.timeOut != null">
          {{ worker.timeIn }}
        </td>
        <td v-if="worker.timeOut != null">
          {{ worker.timeOut }}
        </td>
    </tr>
      <br />
  </table>

  <button class="button printButton" v-print>Print the entire page</button>
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
              timeIn: "10:05:15 AM",
              timeOut: null,
            },
            {
              id: 2,
              name: "ABC",
              timeIn: "11:35:15 AM",
              timeOut: "2:30:15 PM",
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
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding-bottom: 20px;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: green;
  color: white;
}
.printButton{
  border-radius: 4px;
}
</style>