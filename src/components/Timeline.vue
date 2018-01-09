<template>
  <div class="timeline" :class="{dayDone: this.timeline[1].reward}">
    <tomorrow :thisDay="timeline[0]" />
    <today :thisDay="timeline[1]" :timeline="timeline" :tasks="tasks" :rewards="rewards" />
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
      timeline: [],
      tasks: [],
      rewards,
      themes,
    };
  },
  watch: {
    tasks: {
      handler() {
        this.saveTasks();
      },
      deep: true,
    },
    timeline: {
      handler() {
        this.saveTimeline();
      },
      deep: true,
    },
  },
  methods: {
    init() {
      // Saves todays date
      const todayDate = dateFns.startOfDay(dateFns.format(new Date()));
      // Maximum days 'saved'
      const maxDays = 100;

      // Load timeline
      const savedTimeline = JSON.parse(localStorage.getItem('savedTimeline'));
      if (savedTimeline) this.timeline = savedTimeline;

      // If no timeline, create today
      if (this.timeline.length === 0) {
        this.timeline.unshift({
          day: todayDate,
          theme: '',
          reward: '',
        });
      }

      // Generates new, unfinished days up thru tomorrow
      // starting from the last previously logged day in timeline
      const lastDay = JSON.parse(JSON.stringify(this.timeline[0]));
      while (!dateFns.isTomorrow(lastDay.day)) {
        lastDay.day = dateFns.addDays(lastDay.day, 1);
        this.timeline.unshift({
          day: lastDay.day,
          theme: '',
          reward: '',
        });
      }

      // Checks to see if today has a theme
      if (this.timeline[1].theme === '') this.timeline[1].theme = this.randomTheme();
      // Checks to see if tomorrow has a theme
      if (this.timeline[0].theme === '') this.timeline[0].theme = this.randomTheme();

      // Prune to maxDays
      if (this.timeline.length > maxDays) this.timeline = this.timeline.slice(0, maxDays);

      // Save when tasks were last updated (before tasks get retrieved and watched)
      const lastUpdated = localStorage.getItem('updated');

      // Load tasks from localStorage
      const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (loadedTasks) this.tasks = loadedTasks;

      // If the last time the tasks were updated is not today..
      if (lastUpdated !== '' && !dateFns.isToday(lastUpdated)) {
        // .. clear tasks completion
        this.tasks.forEach(x => x.done = false);
      }
    },
    saveTimeline() {
      localStorage.setItem('savedTimeline', JSON.stringify(this.timeline));
    },
    saveTasks() {
      // Sets a last updated flag
      localStorage.setItem('updated', dateFns.format(Date.now()));
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
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
    this.init();
  },
  computed: {
    notToday() {
      // Returns all days except today and tomorrow
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
