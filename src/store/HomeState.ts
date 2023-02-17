import { defineStore } from 'pinia'

interface stateType {
    NavBarData: navBarType
    TextAmtData: textAmtDataType
    TextAmtChangeData: textAmtChangeDataType
}
interface navBarType {
    logoUrl: string
    title: string
    buttonText: buttonTextType
    buttonIcon: buttonIconType
}
interface buttonTextType {
    button_1: string
    button_2: string
    button_3: string
    button_4: string
    button_5: string
}
interface buttonIconType {
    button_1_icon: string
    button_2_icon: string
    button_3_icon: string
    button_4_icon: string
    button_5_icon: string
}
interface textAmtDataType {
    words: []
    str: string
    letters: []
    order: number
    status: boolean
}
interface textAmtChangeDataType {
    str_1: string
    str_2: string
    str_3: string
    str_4: string
}
export const useStore = defineStore({
    id: "HomeState",

    state: (): stateType => ({
        //NavBar组件数据
        NavBarData: {
            logoUrl: new URL(`@/assets/images/logo.png`, import.meta.url).href,
            title: 'Lemon Blog',
            buttonText: {
                button_1: '登录',
                button_2: '留言板',
                button_3: '文章',
                button_4: '首页',
                button_5: '搜索',
            },
            buttonIcon: {
                button_1_icon: 'User',
                button_2_icon: 'Comment',
                button_3_icon: 'Management',
                button_4_icon: 'House',
                button_5_icon: 'Search',
            }
        },
        //TextAmt组件数据
        TextAmtData: {
            words: [],
            str: '东风夜放花千树，更吹落、星如雨。',
            letters: [],
            order: 1,
            status: true,
        },
        TextAmtChangeData: {
            str_1: '醉后不知天在水，满船清梦压星河。',
            str_2: '星稀河影转，霜重月华孤。',
            str_3: '秋夜长，殊未央，月明白露澄清光，层城绮阁遥相望。',
            str_4: '静夜沉沉，浮光霭霭，冷浸溶溶月。',
        }
    })
})