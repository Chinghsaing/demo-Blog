import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "UserInfoState",

    state: () => ({
        userName: '请登录!',
        userNameTag: '',
        userAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        userFollows: '0',
        userLike: '0',
        userArticle: '0',
    })
})