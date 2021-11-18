<template>
  <div class="row">
    <span> Select Date & Time for Worker</span>
    <DateTime />
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue'

export default {
  name: 'Home',
  components: {
    DateTime
  }
}
</script>
