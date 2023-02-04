import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import router from '@/router/index.js'
import { useStore as signStore } from '@/store/SignState'
import { useStore as userInfoStore } from '@/store/UserInfoState'

let loading: any

axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'



function openLoading() {
    loading = ElLoading.service({
        fullscreen: true,
        background: 'rgba(244, 231, 210, .4)',
        text: '加载中...',
    })
}
function closeLoading() {
    loading.close()
}
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
        if (response.data.res_code === 0) {
            router.replace('/')
            signStore().isLogin = false
            userInfoStore().$reset()
            localStorage.removeItem('token')
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default axios