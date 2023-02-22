import axios from 'axios'
import showMessage from '@/api/status'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'
import { useStore as signStore } from '@/store/SignState'
import { useStore as userInfoStore } from '@/store/UserInfoState'

let loading: any

axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token');
        }
        return config
    },
    error => {
        return Promise.reject(error.data)
    }
)

axios.interceptors.response.use(
    response => {
        if (response.data.code === 0) {
            router.replace('/')
            signStore().isLogin = false
            signStore().showSignView = true
            userInfoStore().$reset()
            localStorage.removeItem('token')
            ElMessage.error('请先登录!')
        } else {
            showMessage(response.data.code)
        }
        return response
    },
    error => {
        ElMessage.error('与服务器的通信出现了未知错误!')
        return Promise.reject(error)
    }
)

export function get(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
export function getWithoutParams(url: string) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
export function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
export function postWithoutParams(url: string) {
    return new Promise((resolve, reject) => {
        axios.post(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
export default axios