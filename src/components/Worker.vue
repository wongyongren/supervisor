<template>
  <div>
    <VueMultiselect
  v-model="multiValue"
  :options="options"
  :multiple="true"
  :close-on-select="true"
  placeholder="Pick some"
>
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      multiValue: null,
      options: ['wong', 'phone', 'ali']
    }
  }
}
</script>

<style src="C:\Users\user\Documents\program\supervisor\node_modules\vue-multiselect\dist\vue-multiselect.css"></style>