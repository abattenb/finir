import Vue from 'vue';
import Router from 'vue-router';
import Timeline from '@/components/Timeline';
import Settings from '@/components/Settings';
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
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
