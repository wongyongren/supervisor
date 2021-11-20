<template>
  <div class="row" style="text-align: left">
    <div class="col">
      <span> Select Worker</span>
    </div>
    <div class="col">
      <VueMultiselect
        v-model="multiValue"
        :options="options"
        :multiple="true"
        :close-on-select="false"
        placeholder="Worker Name"
      >
      </VueMultiselect>
    </div>
  </div>
  <div class="row" style="text-align: left">
    <div class="col">
      <span> Select Project Site</span>
    </div>
    <div class="col">
      <VueMultiselect
        v-model="select"
        :options="selectOption"
        :close-on-select="true"
        placeholder="Project Site"
      >
      </VueMultiselect>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
export default {
  components: { VueMultiselect },
  data() {
    return {
      multiValue: null,
      select: null,
      options: [
        "wong",
        "phone",
        "Zion",
        "Luca",
        "Ezra",
        "Alex",
        "Remi",
        "Jude",
        "River",
      ],
      selectOption: ["Suzhou", "8 Tier", "Apollo", "Panda"],
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
