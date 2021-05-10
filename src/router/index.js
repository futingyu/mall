import Vue from 'vue'
import Router from 'vue-router'


 const Home = () =>import('../views/home/home.vue');
 const Catagory = () =>import('../views/catagory/catagory.vue');
 const Shopcar = () =>import('../views/shopcar/shopcar.vue');
 const My = () =>import('../views/my/my.vue');

Vue.use(Router)


const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
    //resolve=>(require(["../views/home/home.vue"],resolve))
  },
  {
    path:'/catagory',
    component:Catagory
    //resolve=>(require(["../views/catagory/catagory.vue"],resolve))
  },
  {
    path:'/shopcar',
    component:Shopcar
    //resolve=>(require(["../views/shopcar/shopcar.vue"],resolve))
  },
  {
    path:'/my',
    component:My
    //resolve=>(require(["../views/my/my.vue"],resolve))
  },
]
 const router=new Router({
    routes,
    mode:'history'
})
export default router