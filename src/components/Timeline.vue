<template>
  <div class="timeline">
    <!-- <div 
      :style="styles(timeline[0])"
      class="day today">
      <div>
        <div>
          {{timeline[0].date}}
        </div>
        <div class="list">
          <div 
            v-for="day in list"
            :key="day.name"
            class="day">
            <i class="far fa-square"></i>
            &nbsp;
            {{ day.name }}
          </div>
        </div>
        <button class="fin">
          FIN
        </button>
      </div>
    </div> -->
    <day 
      v-for="day in timeline"
      :key="day.date"
      :thisDay="day" />
    <!-- <div 
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
    </div> -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import Color from 'color';
import day from './Day';

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
          color: Color('#ef5350'),
        },
        {
          date: '2017-12-30',
          complete: true,
          color: Color('#26A69A'),
        },
        {
          date: '2017-12-29',
          complete: false,
          color: Color('#7E57C2'),
        },
        {
          date: '2017-12-28',
          complete: false,
          color: Color('#2196F3'),
        },
        {
          date: '2017-12-27',
          complete: true,
          color: Color('#FFA726'),
        },
      ],
    };
  },
  created() {
  },
  methods: {
    styles(thisDay) {
      const color = thisDay.color;
      console.log(color);
      return `background-color: ${color.rgb().fade(0.0).string()}`;
    },
  },
  computed: {
    notToday() {
      return this.timeline.slice(1, this.timeline.length);
    },
  },
  components: {
    day,
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
