import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: () => import('../views/not-found/NotFound.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue'),
  },
  {
    path: '/',
    component: () => import('../views/home/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/TopicList.vue')
      },
      {
        path: '/user/:loginname',
        name: 'user',
        component: () => import('../views/center/UserCenter.vue')
      },
      {
        path: '/topic/:id',
        name: 'topic',
        component: () => import('../views/topic/TopicDetail.vue')
      },
      {
        path: '/:type',
        name: 'topicList',
        component: () => import('../views/home/TopicList.vue')
      },
    ]
  },
  {
    path: '/*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由守卫  不登陆不让进
const $message = Vue.prototype.$message
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  // if (to.path != '/login') {
  //   if (token) {
  //     next()
  //   } else {
  //     $message({
  //       message: '没有登录，需要登录页登录',
  //       type: 'warning'
  //     })
  //     next('/login')
  //   }
  // } else {
  //   next()
  // }

  if(token || to.path === '/login'){
    next()
    }else{
    $message({
    message: '没有登录，需要登录页登录',
    type: 'warning'
    })
    next('/login')
  }
})


export default router


