<template>
  <div class="settings">
    <h1>Settings</h1>
    <h2>Reset</h2>
    <button @click="clearCache">Clear Cache</button>

    <h2>Tasks</h2>

    <div class="task" v-for="(task, index) in tasks" :key="index">
      <input type="text" v-model="task.name" placeholder="task">
      <button @click="removeTask(index)">×</button>
    </div>
    <br>
    <button @click="addTask">+</button>
    <hr>
    <button @click="back()">Go Back</button>


  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'settings',
  data() {
    return {
      tasks: [{name: '', done: false}],
    };
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) this.tasks = [{name: '', done: false}];
  },
  watch: {
    tasks: {
      handler() {
        this.saveTasks();
      },
      deep: true,
    },
  },
  methods: {
    clearCache() {
      localStorage.clear();
      this.tasks = [{name: '', done: false}];
    },
    back() {
      this.$router.push('/');
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    addTask() {
      this.tasks.push({name: '', done: false});
    },
    removeTask(index) {
      console.log(index);
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>

.settings {
  padding: .25rem 1rem;
  background: #222;
  color: white;
  height: 100vh;
  overflow-y: auto;

}

h1 {
  font-size: 2.5rem;
  border-bottom: .1rem solid white;
  line-height: 0.85;
  text-shadow: .1rem 0 .1rem #222, -.1rem 0 .1rem #222;
}

button {
  background: transparent;
  border: .1rem solid white;
  color: white;
  font-size: 1.5rem;
  padding: .5rem 1rem;
}

input {
  background: transparent;
  border: none;
  border-bottom: .1rem solid white;
  color: white;
  font-size: 1.25rem;
  padding: .5rem 1rem;

}

.task {
  display: flex;

}

</style>
