import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'), 
    children: [
      {
        path: 'content', 
        component: () => import('../components/content.vue')
      },
      {
        path: 'content1', 
        component: () => import('../components/content1.vue')
      },
      {
        path: 'content2', 
        component: () => import('../components/content2.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router