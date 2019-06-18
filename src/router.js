import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Header = () => import('@/components/common/Header')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      alias: '/h',
      components: {
        header: Header,
        default: () => import('@/views/Home')
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/Kind'),
        header: Header
      }
    },
    {
      path: '/tonelist',
      name: 'tonelist',
      components: {
        default: () => import('@/views/Tonelist'),
        header: Header
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User'),
        header: Header
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/Login')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/Register')
      }
    },
    {
      path: '/prolist',
      name: 'prolist',
      components: {
        default: () => import('@/components/common/Prolist'),
        header: Header
      }
    },
    {
      path: '/family',
      name: 'family',
      components: {
        default: () => import('@/components/common/Family'),
        header: Header
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: () => import('@/views/Search'),
        header: Header
      }
    },
    {
      path: '/video',
      name: 'video',
      components: {
        default: () => import('@/components/common/Video'),
        header: Header
      }
    }
  ]
})
export default router
