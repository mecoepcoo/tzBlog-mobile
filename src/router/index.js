import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Archives from '@/components/Archives'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页-天真博客'
      },
      component: Home
    },
    {
      path: '/archives',
      name: 'Archives',
      meta: {
        title: '归档-天真博客'
      },
      component: Archives
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: '关于-天真博客'
      },
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Change doc title
  document.title = to.meta.title || '天真博客'
  next()
})

export default router
