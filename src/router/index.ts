import { createRouter , createWebHashHistory , RouteRecordRaw } from 'vue-router'
import home from '@/views/Home.vue'
import article from '@/views/Article.vue'

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
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router