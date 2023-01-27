import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "UserInfoState",

    state: () => ({
        UserInfoData: [
            {
                userId: 1,
                userAvatar: new URL(`@/assets/images/news/7.jpg`, import.meta.url).href,
                userName: '零食真好吃',
                userNameTag: 'Good Morning!',
                userArticle: '6',
                userFollower: '2066',
                userFollows: '5'
        }
    ]
    })
})