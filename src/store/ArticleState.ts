import { defineStore } from "pinia"
import { articleList } from '@/api/api'
//定义数据类型
interface stateType {
    ArtData: ArtDataType[]
    EditTemp: string
    CataLog:any[]
    getDataSuccess: boolean
}
interface authorType {
    avatar: string
    follows: number
    like: number
    nametag: string
    uid: number
    username: string
    nickname: string
    article: []
}
interface ArtDataType {
    artId: number
    artImages: string
    artTitle: string
    artContent: string
    author: authorType
    date: string
}
export const useStore = defineStore({
    id: "ArticleState",

    state: (): stateType => ({
        ArtData: [],
        EditTemp: '',
        CataLog:[],
        getDataSuccess: false,
    }),
    actions: {
        getArticleList() {
            articleList().then((res: any) => {
                this.ArtData = res
                this.getDataSuccess = true
            })
        },
    }
})