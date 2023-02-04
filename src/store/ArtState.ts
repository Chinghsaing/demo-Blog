import { defineStore } from "pinia";
import { ElMessage } from "element-plus";
import axios from '@/api/axios'
//定义数据类型
interface stateType {
    ArtData: DataType[]
    EditTemp: string
}
interface authorType {
    avatar: string
    follows: number
    like: number
    nametag: string
    uid: number
    username: string
    nickname: string
    article:[]
}
interface DataType {
    artId: number
    artImages: string
    artTitle: string
    artContent: string
    author: authorType
    date: string
}
export const useStore = defineStore({
    id: "ArtState",

    state: (): stateType => ({
        ArtData: [],
        EditTemp:'',
    }),
    actions: {
        getArticleList() {
            axios.get('/api/artlist')
                .then(res => {
                    this.ArtData = res.data
                })
                .catch(err => {
                    console.log(err);
                    
                    ElMessage.error('获取页面数据失败! 错误原因:'+err.message)
                })
        }
    }
})