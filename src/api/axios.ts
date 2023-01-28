import axios from 'axios'
import { ElLoading,ElMessage } from 'element-plus'

axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let loading: any

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
        openLoading()
        return config
    },
    error => {
        closeLoading()
        return Promise.reject(error.data)
    }
)

axios.interceptors.response.use(
    response => {
        closeLoading()
        return response
    },
    error => {
        closeLoading()
        return Promise.reject(error)
    }
)
export default axios