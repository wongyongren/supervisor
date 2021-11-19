<template>
  <div class="row">
    <div class="col">
    <span> Select Date & Time for Worker</span>
    </div>
    <div class="col">
      
      <v-date-picker v-model="date" mode="dateTime" is24hr>
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="
              px-2
              py-1
              border
              rounded
              focus:outline-none focus:border-blue-300
            "
            :value="inputValue"
            v-on="inputEvents"
          />
          <div>
          Selected Date : {{ date }}
          </div>
        </template>
      </v-date-picker>
      
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style>
</style>