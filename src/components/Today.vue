<template>
  <div class="day today" :class="[theme, {dayDone: this.thisDay.reward}]">
    <div>
      <div>{{formatDate}}</div>
      <div class="list">
        <div 
          v-for="(thing, index) in currentList"
          :key="index"
          class="thing"
          :class="{complete: thing.done}"
          @click="toggleDone(index, thing)">
          <div class="check">
            <i class="far fa-square" :class="[!thing.done ? 'show' : 'hide']"/>
            <i class="fas fa-check-square" :class="[thing.done ? 'show' : 'hide']"/>
          </div>
          <div class="name">
            {{ thing.name }}
          </div>
        </div>
      </div>
      <button 
        class="fin" 
        :class="[canFinish ? 'enabled' : 'disabled']" 
        @click="giftReward">
        FIN
      </button>
    </div>
    <div v-if="this.thisDay.reward" class="icon">
      <i class="fal" :class="thisDay.reward" />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import dateFns from 'date-fns';
import day from './Day';

export default {
  name: 'today',
  extends: day,
  props: [
    'list',
    'rewards',
    'timeline',
  ],
  data() {
    return {
      currentList: '',
    }
  },
  created() {
    this.currentList = JSON.parse(JSON.stringify(this.list));
  },
  computed: {
    canFinish() {
      return this.currentList.every(x => x.done === true);
    },
  },
  methods: {
    toggleDone(index, thing) {
      this.currentList[index].done = !this.currentList[index].done;
    },
    giftReward() {
      // this.timeline.push({
      //     day: '2018-01-03T08:00:00.000Z',
      //     theme: 'spiltblues',
      //     reward: '',
      //   });
      this.thisDay.reward = this.rewards[Math.floor(Math.random() * this.rewards.length)];
    },
  },
};
</script>
<style lang="scss" scoped>

.today {
  z-index: 1;
  position: relative;
  text-shadow: 0 .075rem 0rem var(--theme-dark);
  transition: .2s all ease-out;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    user-select: none;
    touch-action: none;
    pointer-events: none;
    box-shadow: -.25rem 0 1.5rem 0 #444;
  }

  & > div {
    position: relative;
    overflow-x: auto;
    width: 100%;
  }

  .list {
    font-size: 1.75rem;
    font-weight: 400;
    text-align: left;
    margin: 2rem 0 2.75rem 0;

    & .thing {
      position: relative;
      padding: .25rem 2rem;
      cursor: pointer;
      border-top: .1rem solid transparent;
      border-bottom: .1rem solid transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, .05);
      text-shadow: 0 .075rem 0rem var(--theme-dark);
      transition: .2s all ease-out;

      // Strinkthrough
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: .125rem;
        width: calc(0%);
        left: 5rem; 
        top: 1.25rem;
        background: var(--theme-text);
        transition: 1.2s all ease-in;
      }

      // Indent effect
      &.complete {
        text-shadow: 0 -.075rem 0rem var(--theme-dark);

        &:before {
          content: '';
          width: calc(100% - 7rem);
          transition: .2s all ease-out;
        }
      }
    }

    .name {
      padding-bottom: .5rem;
      padding-left: 3.5rem;
    }
    .check {
      position: relative;
      & > i {
        position: absolute;
        top: .175rem;
        left: 0;
      }
      .show {
        opacity: 1;
        transition: .1s opacity ease-out;
      }
      .hide {
        opacity: 0;
        transition: .8s opacity ease-in;
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
    border: .1rem solid var(--theme-low);
    border-radius: .2rem;
    user-select: none;
    pointer-events: none;


    &:hover,
    &:focus,
    &:active {
      transition: .1s all;
    }

    &.enabled {
      position: relative;
      opacity: 1;
      border: .1rem solid var(--theme-text);
      transform: translateY(-.05rem);
      box-shadow: 0 .25rem .5rem var(--theme-dark), 0 -.25rem .5rem var(--theme-high);
      pointer-events: auto;
      transition: .1s all ease-in;
    }

    &.enabled:active {
      position: relative;
      opacity: 1;
      border: .1rem solid var(--theme-text);
      transform: translateY(.05rem);
      box-shadow: 0 -.15rem .5rem var(--theme-dark), 0 .15rem .5rem var(--theme-high);
      transition: .1s all cubic-bezier(.15,.85,.15,.85);
    }

    &.disabled {
      opacity: 0.25;
      border: .1rem solid var(--theme-text);
      box-shadow: 0 0 0 var(--theme-dark), 0 0 0 var(--theme-high);
      transition: .8s all ease-out;
    }
  }
}

// Triggers when day is complete
.today.dayDone {
  & > div {
    animation: 1.5s listFade .25s forwards cubic-bezier(0,.5,.35,.75);

    @keyframes listFade {
      0% {
        opacity: 1;
        transform: translateY(0rem);
      }
      99% {
        opacity: 0;
        transform: translateY(-2rem);
      }
      100% {
        opacity: 0;
        z-index: -1;
      }
    }
  }

  // Shadow disappears
  &:after {
    box-shadow: none;
    transition: 2s all ease-out;
  }

  // Icon fades in after delay
  .icon {
    position: absolute;
    width: 100%;
    opacity: 0;
    animation: 2.5s iconFade 2s forwards cubic-bezier(0,.5,.35,.75);
  }

  @keyframes iconFade {
    from {
      opacity: 0;
      transform: translateY(3rem) scale(1);
    }
    to {
      opacity: 1;
      transform: translateY(0rem) scale(1.05);
    }
  }
  
  .fin {
    user-select: none;
    pointer-events: none;
  }
}


.day .icon {
  font-size: 7rem;
}

</style>
