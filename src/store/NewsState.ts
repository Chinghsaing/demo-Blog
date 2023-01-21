import { defineStore } from 'pinia'

interface stateType {
    newslist: newsListType[]
}
interface newsListType {
    key: number
    list: listType[]
}
interface listType {
    id: number
    title: string
    date: string
    content: string
    img: string
}

export const useStore = defineStore({
    id: "NewsState",

    state: (): stateType => ({
        newslist: [
            {
                key: 0,
                list: [
                    {
                        id: 1,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/1.jpg`, import.meta.url).href
                    },
                    {
                        id: 2,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/2.jpg`, import.meta.url).href
                    },
                    {
                        id: 3,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/3.jpg`, import.meta.url).href
                    },
                ]
            },
            {
                key: 1,
                list: [
                    {
                        id: 1,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href
                    },
                    {
                        id: 2,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/5.jpg`, import.meta.url).href
                    },
                    {
                        id: 3,
                        title: "那年今日",
                        date: "2023/1/14",
                        content: "在有生的瞬间能遇到你",
                        img: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href
                    },
                ]
            },
        ]
    })
})