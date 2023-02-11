import { defineStore } from "pinia"
import { articleList,userArticle } from '@/api/api'
//定义数据类型
interface stateType {
    ArtData: ArtDataType[]
    ArtUser: ArtUserType[]
    EditTemp: string
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
interface ArtUserType{
    artId: number
    artImages: string
    artTitle: string
    artContent: string
    date: string
}
export const useStore = defineStore({
    id: "ArticleState",

    state: (): stateType => ({
        ArtData: [],
        ArtUser:[],
        EditTemp: '',
        getDataSuccess: false,
    }),
    actions: {
        getArticleList() {
            articleList().then((res: any) => {
                this.ArtData = res
                this.getDataSuccess = true
            })
        },
        getUserArticleList(){
            userArticle().then((res:any) => {
                this.ArtUser = res
            })
        }
    }
})