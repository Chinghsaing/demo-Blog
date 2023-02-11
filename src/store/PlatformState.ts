import { defineStore } from 'pinia'
import { userArticle } from '@/api/api'
interface stateType {
    ArtUser: ArtUserType[]
    menuActive: string
}
interface ArtUserType {
    artId: number
    artImages: string
    artTitle: string
    artContent: string
    date: string
}
export const useStore = defineStore({
    id: "PlatformState",
    state: (): stateType => ({
        ArtUser: [],
        menuActive: ''
    }),
    actions: {
        getUserArticleList(){
            userArticle().then((res:any) => {
                this.ArtUser = res
            })
        }
    }
})