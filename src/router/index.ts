import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '@/views/Home.vue'
import article from '@/views/Article.vue'
import admin from '@/views/Admin.vue'
import editarticle from '@/views/EditArticle.vue'
import platform from '@/views/Platform.vue'
import { ElMessage } from 'element-plus'
import myarticle from '@/components/Platform/MyArticle.vue'
import myaccount from '@/components/Platform/MyAccount.vue'
import mymessage from '@/components/Platform/MyMessage.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/home/article/:id',
        name: 'article',
        component: article,
        beforeEnter(to, from, next) {
            document.body.scrollTop = 0
            next()
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin,
    },
    {
        path: '/edit',
        name: 'editarticle',
        component: editarticle,
        beforeEnter(to, from, next) {
            let token = localStorage.getItem('token')
            if (token) {
                next();
            } else {
                ElMessage.error('请先登录!')
                next({ name: 'home' })
            }
        }
    },
    {
        path: '/platform',
        name: 'platform',
        component: platform,
        children: [
            { path: 'myarticle', component: myarticle },
            { path: 'account', component: myaccount },
            { path: 'mymessage', component: mymessage },
        ],
        beforeEnter(to, from, next) {
            let token = localStorage.getItem('token')
            if (token) {
                next();
            } else {
                ElMessage.error('请先登录!')
                next({ name: 'home' })
            }
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router