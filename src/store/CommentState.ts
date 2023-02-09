import { defineStore } from 'pinia'
import axios from '@/api/axios'
import { ElMessage } from "element-plus"
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
            axios.get('/api/cmtlist?id=' + id)
                .then(res => {
                    this.comments = res.data
                })
                .catch(err => {})
        }
    }
})