<template>
  <div class="timeline" :class="{dayDone: this.timeline[1].reward}">
    <tomorrow :thisDay="timeline[0]" />
    <today :thisDay="timeline[1]" :timeline="timeline" :list="list" :rewards="rewards" />
    <day :thisDay="day" v-for="(day, index) in notToday" :key="index" />
  </div>
</template>

<script>
/* eslint-disable */

import dateFns from 'date-fns';

import rewards from '@/common/rewards';
import themes from '@/common/themes';

import day from './Day';
import today from './Today';
import tomorrow from './Tomorrow';


/* eslint-disable no-console */

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
      rewards,
      themes,
      timeline: [
        {
          day: '2018-01-01T08:00:00.000Z',
          theme: 'genepersimmons',
          reward: 'fa-bomb',
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
  watch: {
    list: {
      handler() {
        // TODO: Save
        // console.log('save');
        // this.saveSettings();
      },
      deep: true,
    },
    timeline: {
      handler() {
        // TODO: Save
        // console.log('save');
        // this.saveSettings();
      },
      deep: true,
    },
  },
  methods: {
    randomTheme() {
      // returnS color that hasnt been used in the last 2
      const blacklist = [];
      let i = 0;
      while (i < this.timeline.length && blacklist.length < 2) {
        // If the theme in the timeline isnt black, add to blacklist
        if (this.timeline[i].theme) blacklist.push(this.timeline[i].theme);
        i += 1;
      }
      // Make copy of themes
      let filteredThemes = JSON.parse(JSON.stringify(this.themes));
      // Filter out blacklist from pool of available themes
      filteredThemes = filteredThemes.filter(f => !blacklist.includes(f));
      // Return random theme from filtered theme list
      return filteredThemes[Math.floor(Math.random() * filteredThemes.length)];
    },
  },
  created() {
    const todayDate = dateFns.startOfDay(dateFns.format(new Date()));

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
