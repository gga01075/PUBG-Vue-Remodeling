import Vue from 'vue'
import Router from 'vue-router'
import PageLayout from '@/pages/Layout/PageLayout'
import Main from '@/pages/Main'
import Patchnote from '@/pages/patchnote/Patchnote'
import League from '@/pages/league/League'
import Store from '@/pages/store/Store'
import Community from '@/pages/community/Community'
import Intro from '@/pages/intro/Intro'
import Competition from '@/pages/competition/Competition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageLayout,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: Main
        },
        {
          path: '/patchnote',
          name: 'patchnote',
          component: Patchnote
        },
        {
          path: '/league',
          name: 'league',
          component: League
        },
        {
          path: '/competition',
          name: 'competition',
          component: Competition
        },
        {
          path: '/store',
          name: 'store',
          component: Store
        },
        {
          path: '/community',
          name: 'community',
          component: Community
        },
        {
          path: '/intro',
          name: 'intro',
          component: Intro
        }
      ]
    }
  ]
})
