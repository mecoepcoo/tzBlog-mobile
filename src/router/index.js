import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Archives from '@/components/Archives'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    }
  ]
})
