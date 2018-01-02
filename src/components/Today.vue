<template>
  <div class="day today" :class="theme">
    <div>
      <div>{{formatDate}}</div>
      <div class="list">
        <div 
          v-for="(thing, index) in currentList"
          :key="thing.name"
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
      <button class="fin" :class="[canFinish ? 'enabled' : 'disabled']">
        FIN
      </button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Color from 'color';
import dateFns from 'date-fns';
import day from './Day';

export default {
  name: 'today',
  extends: day,
  props: [
    'list',
  ],
  data() {
    return {
      currentList: '',
    }
  },
  created() {
    this.currentList = JSON.parse(JSON.stringify(this.list));
    // console.log(this.currentList);
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
  },
};
</script>
<style lang="scss" scoped>

.today {
  // box-shadow: -.25rem 0 1.5rem 0 #444;
  z-index: 1;

  .list {
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    margin: 2rem 0 2.75rem 0;

    & .thing {
      position: relative;
      padding: .5rem 2rem;
      cursor: pointer;
      border-top: .1rem solid transparent;
      border-bottom: .1rem solid transparent;
      transition: .2s all ease-out;

      &:hover,
      &:focus,
      &:active {
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        height: .125rem;
        width: calc(0%);
        left: 5rem; 
        top: 1.65rem;
        background: var(--theme-text);
        transition: 1.2s all ease-in;
      }

      &.complete {

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

    &:hover,
    &:focus,
    &:active {
      transition: .2s all;
    }

    &.enabled {
      position: relative;
      opacity: 1;
      border: .1rem solid var(--theme-text);
      transform: translateY(-.1rem);
      box-shadow: 0 .25rem .5rem var(--theme-dark), 0 -.25rem .5rem var(--theme-high);
      transition: .15s all ease-in;
    }

    &.enabled:active {
      position: relative;
      opacity: 1;
      border: .1rem solid var(--theme-text);
      transform: translateY(.1rem);
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

</style>
