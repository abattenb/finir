<template>
  <div class="day tomorrow"  :class="theme">
    <div>
      Tomorrow<br>
      brings&hellip;
      <br>
      <br>
    </div>
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

.tomorrow > div{
  font-family: 'Mr Dafoe', cursive;
  transform: rotate(-8deg) skew(-5deg);
  font-size: 4rem;
  line-height: 1;
  font-weight: 100;
}

</style>

