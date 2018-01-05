<template>
  <div class="day tomorrow"  :class="theme">
    <!-- TODO: Add 'tomorrow' title -->
    <!-- Tomorrow -->
    <div>Tomorrow is..</div>

  </div>
</template>
<script>
/* eslint-disable */
import day from './Day';
import dateFns from 'date-fns';

export default {
  name: 'tomorrow',
  extends: day,
  props: [
  ],
  data() {
    return {
    }
  },
  created() {
  },
  computed: {
    formatDate() {
      // return dateFns.format(this.thisDay.day, 'MMMM Do');
    },
    theme() {
      // Auto applies tomorrows theme 
      return this.thisDay.theme;
    }
  },
  methods: {
  },
};
</script>
<style lang="scss">


</style>

