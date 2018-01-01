<template>
  <div class="timeline">
    <div 
      :style="styles(timeline[0])"
      class="day today">
      <div>
        <div>
          {{timeline[0].date}}
        </div>
        <div class="list">
          <div 
            v-for="challenge in list"
            :key="challenge.thing"
            class="challenge">
            <i class="far fa-square"></i>
            &nbsp;
            {{ challenge.name }}
          </div>
        </div>
        <button class="fin">
          FIN
        </button>
      </div>
    </div>
    <div 
      v-for="day in notToday"
      :key="day.date"
      :style="styles(day)"
      class="day">
      <div>
        <div>
          {{day.date}}
        </div>
        <div class="icon">
          <i class="far fa-check-circle" v-if="day.complete"></i>
          <i class="far fa-times" v-else></i>
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
      list: [
        { name: 'Wake up', done: false },
        { name: 'Eat', done: false },
        { name: 'Meditate', done: false },
      ],
      timeline: [
        {
          date: '2017-12-31',
          complete: true,
          color: '#ef5350',
        },
        {
          date: '2017-12-30',
          complete: true,
          color: '#26A69A',
        },
        {
          date: '2017-12-29',
          complete: false,
          color: '#7E57C2',
        },
        {
          date: '2017-12-28',
          complete: false,
          color: '#2196F3',
        },
        {
          date: '2017-12-27',
          complete: true,
          color: '#FFA726',
        },
      ],
    };
  },
  created() {
  },
  methods: {
    styles(day) {
      const opacity = (day.complete ? 1.0 : 0.1);
      const color = hexToRGB(day.color);
      return `background-color: rgba(${color},${opacity})`;
    },
  },
  computed: {
    notToday() {
      return this.timeline.slice(1, this.timeline.length);
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
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  box-shadow: inset 0 0 10rem rgba(0, 0, 0, .2);
  text-shadow: 0 -.05rem 0rem #777;
  border: .05rem solid black;
  box-sizing: border-box;

  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(-5deg, rgba(0,0,0,0.25), rgba(255,255,255,0.3));
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 1;
  }

  & > div {
    width: 100%;
    margin: auto 0;
  }

  & .icon {
    font-size: 5rem;
  }

  .list {
    font-size: 2rem;
    text-align: left;
    margin: 1rem 0 1.75rem 0;

    & .challenge {
      border-top: .1rem solid rgba(0, 0, 0, .2);
      border-bottom: .1rem solid rgba(0, 0, 0, .2);
      padding: .5rem 2rem;
      margin-bottom: -.1rem;
      background: linear-gradient(-5deg, rgba(0,0,0,0.05), rgba(0,0,0,0));
      cursor: pointer;
    }
  }
}

.fin {
  display: block;
  width: calc(100% - 4rem);
  font-size: 2.5rem;
  background: none;
  color: white;
  font-weight: 700;
  padding: .5rem;
  margin: 0 2rem;
  box-shadow: 0 .05rem 0rem #777;
  border: .2rem solid white;
  transition: .2s all;

  &:hover,
  &:focus,
  &:active {
    background: rgba(0, 0, 0, .2);
    transition: .2s all;
  }
}

</style>
