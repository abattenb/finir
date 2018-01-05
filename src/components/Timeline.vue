<template>
  <div class="timeline" :class="{dayDone: this.timeline[1].reward}">
    <tomorrow :thisDay="timeline[0]" />
    <today :thisDay="timeline[1]" :timeline="timeline" :list="list" :rewards="rewards" />
    <day :thisDay="day" v-for="(day, index) in notToday" :key="index" />
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
          day: '2018-01-01T08:00:00.000Z',
          theme: 'genepersimmons',
          reward: 'fa-bomb',
        },
        // {
        //   day: '2017-12-31T08:00:00.000Z',
        //   theme: 'megaviolet',
        //   reward: 'fa-leaf',
        // },
        // {
        //   day: '2017-12-30T08:00:00.000Z',
        //   theme: 'genepersimmons',
        //   reward: 'fa-gem',
        // },
        // {
        //   day: '2017-12-29T08:00:00.000Z',
        //   theme: '',
        //   reward: '',
        // },
      ],
    };
  },
  methods: {
    randomTheme() {
      // TODO: return color that hasnt been used in the last 2
      return this.themes[Math.floor(Math.random() * this.themes.length)];
    },
  },
  created() {
    const todayDate = dateFns.startOfDay(dateFns.format(new Date()));
    console.log(todayDate);
    // Checks if there is a timeline
    if (this.timeline.length === 0) {
      this.timeline.unshift({
        day: todayDate,
        theme: '',
        reward: '',
      });
    }

    // Generates new days up to tomorrow
    const lastDay = JSON.parse(JSON.stringify(this.timeline[0]));
    while (!dateFns.isTomorrow(lastDay.day)) {
      lastDay.day = dateFns.addDays(lastDay.day, 1);
      this.timeline.unshift({
        day: lastDay.day,
        theme: '',
        reward: '',
      });
    }
    // // Checks to see if today has a theme
    if (this.timeline[1].theme === '') this.timeline[1].theme = this.randomTheme();
    // // Checks to see if tomorrow has a theme
    if (this.timeline[0].theme === '') this.timeline[0].theme = this.randomTheme();

    // TODO: Prune to 100 entries
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

<style lang="scss">
.timeline {
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

</style>
