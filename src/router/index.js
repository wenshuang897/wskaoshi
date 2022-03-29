import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect:"/login",
    component: HomeView,
    children:[
      {path:"3-1",name:"haha",component:()=>import("../views/homes/HomeIndex.vue")},
      {path:"3-2",component:()=>import("../views/homes/MyLuyou.vue")},
     
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});


// 权限管理
router.beforeEach(function(to,from,next){
  let token = localStorage.getItem("token")
  if(to.path=="/login"){//没有权限约束
    next()
  }else{
    if(token) return next()
    if(!token)return next({path:"/login"})
  }
  
})


export default router;
