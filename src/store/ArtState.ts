import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "ArtState",

    state: () => ({
        ArtData: [
            {
                id: 1,
                artImages: new URL(`@/assets/images/news/1.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful getgetgetgetgetgetgetgetgetgetgetgetgetget  ',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 2,
                artImages: new URL(`@/assets/images/news/2.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 3,
                artImages: new URL(`@/assets/images/news/3.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            }, 
            {
                id: 4,
                artImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            }, 
            {
                id: 5,
                artImages: new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            }, 
            {
                id: 6,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 7,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 8,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 9,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 10,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
            {
                id: 11,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                athuorName: 'Mishuroki',
                artDate: '2023/1/16',
            },
        ]
    })
})