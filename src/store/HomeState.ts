import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "HomeState",

    state: () => ({
        //NavBar组件数据
        NavBarData: {
            logoUrl: new URL(`@/assets/images/logo.png`, import.meta.url).href,
            title: 'Lemon Blog',
            buttonText: {
                button_1: '标题',
                button_2: '标题',
                button_3: '标题',
                button_4: '标题',
                button_5: '标题',
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