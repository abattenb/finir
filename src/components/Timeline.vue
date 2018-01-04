<template>
  <div class="timeline">

    <tomorrow :thisDay="timeline[0]" v-if="timeline[1].reward"/>
    <today :thisDay="timeline[1]" :timeline="timeline" :list="list" :rewards="rewards" />
    <day :thisDay="day" v-for="day in notToday" :key="day.day" />
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import dateFns from 'date-fns';
import day from './Day';
import today from './Today';
import tomorrow from './Tomorrow';

export default {
  name: 'timeline',
  data() {
    return {
      list: [
        { name: 'Wake up', done: true },
        { name: 'Eat breakfast', done: true },
        { name: 'Ping friend', done: true },
        { name: 'Read', done: true },
        { name: 'Meditate', done: true },
      ],
      themes: [
        'starburst',
        'genepersimmons',
        'gloriousincandescence',
        'limelife',
        'seadrink',
        'barbiegirl',
        'spiltblues',
        'megaviolet',
      ],
      rewards: [
        'fa-anchor',
        'fa-clock',
        'fa-balance-scale',
        'fa-battery-bolt',
        'fa-beer',
        'fa-bell',
        'fa-bicycle',
        'fa-birthday-cake',
        'fa-bomb',
        'fa-book',
        'fa-bug',
        'fa-camera-retro',
        'fa-club',
        'fa-coffee',
        'fa-compass',
        'fa-envelope',
        'fa-fighter-jet',
        'fa-flag',
        'fa-futbol',
        'fa-gamepad',
        'fa-gem',
        'fa-gift',
        'fa-globe',
        'fa-headphones',
        'fa-heart',
        'fa-jack-o-lantern',
        'fa-leaf',
        'fa-lemon',
        'fa-lightbulb',
        'fa-magic',
        'fa-magnet',
        'fa-map-pin',
        'fa-medkit',
        'fa-microchip',
        'fa-microphone-alt',
        'fa-moon',
        'fa-paint-brush',
        'fa-paper-plane',
        'fa-paperclip',
        'fa-paw',
        'fa-pen-alt',
        'fa-pencil-alt',
        'fa-puzzle-piece',
        'fa-qrcode',
        'fa-rocket',
        'fa-save',
        'fa-shield-alt',
        'fa-snowflake',
        'fa-space-shuttle',
        'fa-spade',
        'fa-star',
        'fa-sun',
        'fa-tag',
        'fa-thumbtack',
        'fa-ticket-alt',
        'fa-tree-alt',
        'fa-trophy',
        'fa-tv-retro',
        'fa-umbrella',
        'fa-usd-circle',
        'fa-user-secret',
        'fa-utensils-alt',
      ],
      timeline: [
        {
          day: '2018-01-04T08:00:00.000Z',
          theme: 'megaviolet',
          reward: '',
        },
        {
          day: '2018-01-03T08:00:00.000Z',
          theme: 'seadrink',
          reward: '',
        },
        {
          day: '2018-01-02T08:00:00.000Z',
          theme: '',
          reward: '',
        },
        {
          day: '2018-01-01T08:00:00.000Z',
          theme: 'genepersimmons',
          reward: '',
        },
        {
          day: '2017-12-31T08:00:00.000Z',
          theme: 'megaviolet',
          reward: 'fa-leaf',
        },
        {
          day: '2017-12-30T08:00:00.000Z',
          theme: 'genepersimmons',
          reward: 'fa-gem',
        },
        {
          day: '2017-12-29T08:00:00.000Z',
          theme: '',
          reward: '',
        },
      ],
    };
  },
  methods: {
    formatDate(thisDay) {
      return dateFns.format(thisDay, 'MMMM Do');
    },
  },
  created() {
  },
  computed: {
    notToday() {
      return this.timeline.slice(2, this.timeline.length);
    },
  },
  components: {
    day,
    today,
    tomorrow,
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

</style>
