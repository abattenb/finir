<template>
  <div>
    <h1>Test</h1>

    <div class="panels">
      <div class="panel">1</div>
      <div class="panel">2</div>
      <div class="panel">3</div>
      <div class="panel">4</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

.panels {
  display: flex;
  flex-direction: row-reverse;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  font-size: 10rem;
  color: white;

  .panel {
    flex: 0 0 85vw;
    height: 20rem;
    outline: 1px solid black;
    background: red;
    transform: translate3d(85vw, 0, 0);
  }
}

</style>

