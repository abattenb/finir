<template>
  <div>
    <div class="timeline">
      <today
        :thisDay="day"
        v-for="(day, index) in timeline" 
        :key="index" 
        :list="list" 
        :rewards="rewards" />
    </div>


  </div>
</template>

<script>

// import dateFns from 'date-fns';

import rewards from '@/common/rewards';
import themes from '@/common/themes';

import today from './Today';

export default {
  name: 'test',
  data() {
    return {
      rewards,
      list: [
        { name: 'Wake up', done: true },
        { name: 'Eat breakfast', done: true },
        { name: 'Ping friend', done: true },
        { name: 'Read', done: true },
        { name: 'Meditate', done: true },
      ],
      timeline: [],
    };
  },
  created() {
    Object.entries(themes).forEach((theme) => {
      this.timeline.unshift({
        // day: todayDate,
        theme,
        reward: this.giftReward(),
      });
    });
    // Need to add an extra day due to how tomorrow shifting works normally
    this.timeline.unshift({
      theme: '',
      reward: this.giftReward(),
    });
  },
  methods: {
    giftReward() {
      // Generates a random reward for today
      return rewards[Math.floor(Math.random() * rewards.length)];
    },
  },
  components: {
    today,
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>

