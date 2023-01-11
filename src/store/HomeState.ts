import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "GobalState",

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
            str: '请输入标题1',
            letters: [],
            order: 1,
            status: true,
        },
        TextAmtChangeData: {
            str_1: '请输入标题11',
            str_2: '请输入标题111',
            str_3: '请输入标题1111',
            str_4: '请输入标题11111',
        }
    })
})