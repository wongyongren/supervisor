<template>
  <div class="row">
    <span> Select Date & Time for Worker</span>
    <DateTime />
    <Worker />
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue'
import Worker from '@/components/Worker.vue'

export default {
  name: 'Home',
  components: {
    DateTime,
    Worker
  }
}
</script>
