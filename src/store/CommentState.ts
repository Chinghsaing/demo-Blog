import { defineStore } from 'pinia'
import { commentList } from '@/api/api'
interface stateType {
    comments: DataType[]
}
interface userType {
    avatar: string
    nickname: string
    username: string
}
interface DataType {
    artId: number
    cmtId: number
    content: string
    user: userType
    date: string
}
export const useStore = defineStore({
    id: "CommentState",
    state: (): stateType => ({
        comments: [],
    }),
    actions: {
        getCommentList(id: any) {
            commentList({
                'id':id
            }).then((res: any) => {
                this.comments = res
            })
        }
    }
})