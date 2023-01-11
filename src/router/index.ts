import { createRouter , createWebHashHistory , RouteRecordRaw } from 'vue-router'
import home from '@/views/home.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:home,
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router