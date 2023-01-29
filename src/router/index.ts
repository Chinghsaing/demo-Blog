import { createRouter , createWebHashHistory , RouteRecordRaw } from 'vue-router'
import home from '@/views/Home.vue'
import article from '@/views/Article.vue'
import admin from '@/views/Admin.vue'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:home,
    },
    {
        path:'/home/article/:id',
        name:'article',
        component:article,
    }, 
    {
        path:'/admin',
        name:'admin',
        component:admin,
    },   
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router