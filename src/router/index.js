import Vue from 'vue';
import Router from 'vue-router';
import Timeline from '@/components/Timeline';
import Test from '@/components/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: Timeline,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
