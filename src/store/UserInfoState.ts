import { defineStore } from 'pinia'
import { useStore as signStore } from './SignState'
import axios from '@/api/axios';
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
        getUserInfo(info: any) {
            this.uid = info.uid
            this.userName = info.username
            this.userNickname = info.nickname
            this.userNameTag = info.nametag
            this.userArticle = info.article.length
            this.userFollows = info.follows
            this.userLike = info.like
            this.userAvatar = info.avatar

            localStorage.setItem('username', info.username)
            localStorage.setItem('nickname', info.nickname)
            localStorage.setItem('nametag', info.nametag)
            localStorage.setItem('article', info.article.length)
            localStorage.setItem('follows', info.follows)
            localStorage.setItem('like', info.like)
            localStorage.setItem('avatar', info.avatar)
        },
        getLocalInfo() {
            axios.get('/user/getuser')
                .then(res => {
                    localStorage.setItem('article', res.data.article.length)
                    localStorage.setItem('follows', res.data.follows)
                    localStorage.setItem('like', res.data.like)

                    this.userName = localStorage.getItem('username') as string
                    this.userNickname = localStorage.getItem('nickname') as string
                    this.userNameTag = localStorage.getItem('nametag') as string
                    this.userArticle = localStorage.getItem('article') as string
                    this.userFollows = localStorage.getItem('follows') as string
                    this.userLike = localStorage.getItem('like') as string
                    this.userAvatar = localStorage.getItem('avatar') as string

                    signStore().$state.isLogin = true
                })
                .catch(err => {
                })
        },
        clearLocalInfo() {
            this.$reset()
            localStorage.removeItem('username')
            localStorage.removeItem('nickname')
            localStorage.removeItem('nametag')
            localStorage.removeItem('article')
            localStorage.removeItem('follows')
            localStorage.removeItem('like')
            localStorage.removeItem('avatar')
            localStorage.removeItem('token')
            signStore().$state.isLogin = false
        }
    }
})