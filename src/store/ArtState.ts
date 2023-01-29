import { defineStore } from "pinia";
import { useStore as userStore } from '@/store/UserInfoState'
import axios from '@/api/axios'
//定义数据类型
interface stateType {
    ArtData: DataType[]
}
interface authorType {
    avatar: string
    follows: number
    like: number
    nametag: string
    uid: number
    username: string
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
        ArtData: []
    }),
    actions: {
        getArticleList() {
            axios.get('/api/artlist')
                .then(res => {
                    this.ArtData = res.data
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
})