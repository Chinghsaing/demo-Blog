import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "UserInfoState",

    state: () => ({
        uid: '',
        userName: '',
        userNickname: '请登录!',
        userNameTag: '欢迎来到Lemon Blog!',
        userAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        userFollows: '0',
        userLike: '0',
        userArticle: '0',
    }),
    actions: {
        getUserInfo(info:any) {
            this.uid = info.uid
            this.userName = info.username
            this.userNickname = info.nickname
            this.userNameTag = info.nametag
            this.userArticle = info.article.length
            this.userFollows = info.follows
            this.userLike = info.like
            this.userAvatar = info.avatar
        }
    }
})