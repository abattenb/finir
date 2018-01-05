<template>
  <div class="day" :class="theme">
    <!-- <div>{{formatDate}}</div> -->
    <div class="icon">
      <i class="fal" v-if="thisDay.reward" :class="thisDay.reward" />
      <span v-else>&middot;</span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import dateFns from 'date-fns';

export default {
  name: 'day',
  props: [
    'thisDay',
  ],
  data() {
    return {
    }
  },
  created() {
  },
  computed: {
    formatDate() {
      return dateFns.format(this.thisDay.day, 'MMMM Do');
    },
    theme() {
      // If 'reward' exists or it's today, apply theme 
      return (this.thisDay.reward !== '' || dateFns.isToday(this.thisDay.day) ? this.thisDay.theme : '');
    }
  },
  methods: {
  },
};
</script>
<style lang="scss">

.day {
  flex: 0 0 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  box-sizing: border-box;

  transform: translate3d(85vw, 0, 0);


  --theme-text: #DDD;
  --theme-primary: #DDD;
  --theme-high: #FAFAFA;
  --theme-low: #FAFAFA;
  --theme-dark: #FAFAFA;

  color: var(--theme-text);
  box-shadow: inset 0 0 10rem var(--theme-dark);
  text-shadow: 0 -.075rem 0rem var(--theme-dark);
  border-left: .1rem solid var(--theme-hard);
  border-right: .1rem solid var(--theme-primary);
  background: linear-gradient(-185deg, var(--theme-high), var(--theme-low));

}


.dayDone .day {
  animation: 3s 8s reveal forwards;
}

@keyframes reveal {
  from {
    transform: translate3d(85vw, 0, 0);
  }
  to {
    transform: translate3d(0vw, 0, 0);
  }
}



</style>

