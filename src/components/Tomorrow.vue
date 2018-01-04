<template>
  <div class="day tomorrow"  :class="theme">
    <!-- Tomorrow -->
    <!-- <div>{{formatDate}}</div> -->

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

.tomorrow {
  flex-basis: 0;
  margin-left: -.1rem;
  animation: 3s reveal 8s forwards;
}

@keyframes reveal {
  from {
    flex-basis: 0;
    margin-left: -.1rem;
  }
  to {
    flex-basis: 85vw;
    margin-left: 0;
  }
}
</style>

