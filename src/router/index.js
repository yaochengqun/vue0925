import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Product from '@/components/Product'
import Search from '@/components/Search'
import Para from '@/components/ParamsDemo'
import Para1 from '@/components/Para1'
import Para2 from '@/components/Para2'
import Sc from '@/components/ScopedDemo'
import Sc1 from '@/components/Sc1'
import NotFound from '@/components/NotFound'
import Img from '@/components/ImgDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
      	  path: '/home',
          name: 'Home',
          component: Home
      	},
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/product',
          name: 'Product',
          component: Product
        }
      ],
      redirect: '/home'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/para',
      name: 'Para',
      component: Para,
      children:[
        {
          path: '/para/para1',
          name: 'Para1',
          component: Para1
        },
        {
          path: '/para/para2',
          name: 'Para2',
          component: Para2
        }
      ]
    },
    {
      path: '/sc',
      name: 'Sc',
      component: Sc,
      children:[
        {
          path: '/sc/sc1',
          name: 'Sc1',
          component: Sc1
        }
      ],
      redirect: '/sc/sc1'
    },
    {
      path: '/img',
      name: 'Img',
      component: Img
    },
    {
      path: '*',//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部
      name: 'NotFound',
      component: NotFound
    }
  ]
})
