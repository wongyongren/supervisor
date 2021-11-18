<template>
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
      {{date}}
      </div>
    </template>
  </v-date-picker>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style>
</style>