import { defineStore } from 'pinia'
import { commentList } from '@/api/api'
interface stateType {
    comments: DataType[]
}
interface userType {
    uid:string
    avatar: string
    nickname: string
    username: string
}
interface replyType {
    user:userType
    toUser:userType
    replyContent:string
    date:string
}
interface DataType {
    artId: number
    cmtId: number
    content: string
    user: userType
    date: string
    replycmt?:replyType[]
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