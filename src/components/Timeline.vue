<template>
  <div class="timeline">
    <div 
      v-for="day in data"
      :key="day.date"
      :style="background(day)"
      class="day">
      <div>
        <div>
          {{day.date}}
        </div>
        <div>
          {{day.complete}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hexToRGB from '@/common/utils';
/* eslint-disable no-console */

export default {
  name: 'timeline',
  data() {
    return {
      data: [
        {
          date: '2017-12-31',
          complete: true,
          color: '#ef5350',
        },
        {
          date: '2017-12-30',
          complete: false,
          color: '#26A69A',
        },
        {
          date: '2017-12-29',
          complete: true,
          color: '#7E57C2',
        },
        {
          date: '2017-12-28',
          complete: false,
          color: '#2196F3',
        },
        {
          date: '2017-12-27',
          complete: false,
          color: '#FFA726',
        },
      ],
    };
  },
  created() {
  },
  methods: {
    background(day) {
      const opacity = (day.complete ? 1.0 : 0.2);
      const color = hexToRGB(day.color);
      console.log(color);
      return `background-color: rgba(${color},${opacity})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
}

.day {
  flex: 0 0 80vw;
  display: flex;
  position: relative;
  height: 100%;
  font-size: 3rem;
  font-weight: 900;
  color: white;
  text-align: center;
  border: .1rem solid black;
  box-sizing: border-box;
}
.day:before {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(-5deg, rgba(0,0,0,0.2), rgba(255,255,255,0.2));
  mix-blend-mode: overlay;
  touch-action: none;
  z-index: 1;
}

.day > div {
  margin: auto;
}
</style>
