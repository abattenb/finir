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
      <button class="fin">
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
    console.log(this.currentList);
  },
  computed: {
  },
  methods: {
    toggleDone(index, thing) {
      this.currentList[index].done = !this.currentList[index].done;
    },
  },
};
</script>
<style lang="scss">

.today {
  // box-shadow: -.25rem 0 1.5rem 0 #444;
  z-index: 1;

  .list {
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    margin: 1rem 0 1.75rem 0;

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
        height: .15rem;
        width: calc(0%);
        left: 5rem; 
        top: 1.6rem;
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
        top: .2rem;
        left: 0;
      }
      .show {
        opacity: 1;
        transition: .2s opacity ease-out;
      }
      .hide {
        opacity: 0;
        transition: 1.2s opacity ease-in;
      }
    }
  }
}

.fin {
  display: block;
  width: calc(100% - 4rem);
  font-size: 2.5rem;
  background: var(--theme-high);
  background: none;
  color: white;
  font-weight: 700;
  padding: .5rem;
  margin: 0 2rem;
  border: .05rem solid var(--theme-dark);
  border-radius: .2rem;
  box-shadow: 0 .1rem 0rem var(--theme-dark);
  transition: .2s all;

  &:hover,
  &:focus,
  &:active {
    background: var(--theme-low);
    transition: .2s all;
  }
}


</style>

