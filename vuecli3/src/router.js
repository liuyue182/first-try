import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',//hash
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        alias:'/lkw'
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children:[
          {
              path:'test1',
              name:'test1',
              component:Test1
          },
          {
              path:'test2/:xx/:age',
              component:Test2
          },
          {
              path:'test2',
              component:Test2
          }
      ]},
      {
          path:'/home',
          redirect:'/'
      },
      {
          path:'/home/:xx/:age',
          redirect:'/mine/test2/:xx/:age'
      },
      {
          path:'*',
          component:Error
      }
  ],
});