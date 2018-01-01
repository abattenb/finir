<template>
  <div class="timeline">
    <div v-for="day in data" :key="day.date" class="day">
      {{day.date}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data() {
    return {
      data: [
        {
          date: '2017-12-31',
          complete: false,
          color: '#ef5350',
        },
        {
          date: '2017-12-30',
          complete: false,
          color: '#26A69A',
        },
        {
          date: '2017-12-29',
          complete: false,
          color: '#7E57C2',
        },
      ],
    };
  },
  methods() {
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
}

.day {
  
  border: .1rem solid black;
}
</style>
