<template>
  <div class="day" :style="bg()">
    <!-- <div>{{formatDate}}</div> -->
    <div class="icon">
      <i class="fal" :class="thisDay.reward" v-if="thisDay.complete"></i>
      <span v-else>&middot;</span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Color from 'color';
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
  },
  methods: {
    bg() {
      // TODO: Generate all colors into classes
      let style= '';
      const color = this.thisDay.color;
      const high = color.rotate(10).lighten(0.1).string();
      const low = color.rotate(-15).darken(0.1).string();
      const dark = color.rotate(-10).darken(0.3).string();
      if (this.thisDay.complete) {
        const gradient = `linear-gradient(-185deg, ${high}, ${low})`;
        style= `
          background: ${gradient};
          box-shadow: inset 0 0 10rem ${dark};
          text-shadow: 0 -.075rem 0rem ${dark};
          border-left: .1rem solid ${dark};
          border-right: .1rem solid ${dark};`;
      } else {
        style= `
          color: #CCC;
          background: #E9E9E9;
          border-left: .05rem solid #FFF;
          border-right: .05rem solid #DDD;`;
      }
      console.log('color');
      console.log(this.thisDay.color.hsl().string());
      console.log(high);
      console.log(low);
      console.log(dark);
      return style;
    },
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
  font-size: 3rem;
  font-weight: 600;
  color: white;
  box-sizing: border-box;


  & .icon {
    font-size: 7rem;
  }

  &.today {
    box-shadow: -.25rem 0 1.5rem 0 #444;
    z-index: 1;

    .list {
      font-size: 2rem;
      text-align: left;
      margin: 1rem 0 1.75rem 0;

      & .day {
        border-top: .1rem solid rgba(0, 0, 0, .2);
        border-bottom: .1rem solid rgba(0, 0, 0, .2);
        padding: .5rem 2rem;
        margin-bottom: -.1rem;
        background: linear-gradient(-5deg, rgba(0,0,0,0.05), rgba(0,0,0,0));
        cursor: pointer;
      }
    }
  }
}
</style>

