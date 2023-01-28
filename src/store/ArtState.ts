import { defineStore } from "pinia";
import { useStore as userStore } from '@/store/UserInfoState'
//定义数据类型
interface stateType {
    ArtData: DataType[]
}
interface DataType {
    id: number
    artImages: string
    artTitle: string
    artContent: string
    athuorImages: string
    athuorName: string
    artDate: string
}
export const useStore = defineStore({
    id: "ArtState",

    state: (): stateType => ({
        ArtData: [
            {
                id: 1,
                artImages: new URL(`@/assets/images/news/9.jpg`, import.meta.url).href,
                artTitle: '蒲公英的约定',
                artContent: ' 1. 更换了网页的主题风格，让它看起来没有之前那么违和。PS：其中一大半的时间都花在网页的设计上面去了，特别是找背景素材，配色。还有解决了body的高度永远是固定值的问题，这个问题原来是我给 body设置了高度  导致的问题。业务还没写，网页设计这块我估计我就先倒下了。2.  采用模态框的形式创建登录注册组件，并且完成了样式。PS：总的来说这次的风格改动还是让我比较满意的，这样改来改去也大大的放慢了自己的开发效率。总之我觉得简直慢到不能再慢了，两天时间就做了这么点东西。 总之，加油吧！3.  完成了表单本地的基本验证，并修改了相关提示的样式。PS: 关于表单验证的api我看了一个下午，才勉强搞懂怎么用，实在是太难了。4.  建立了article页面，并且通过路由，由文章的id自动渲染出相应的页面。（文章详情页样式尚未开始）5.  新增了axios的包。PS：本来应该早就安装了，一开始在写的时候发现用不到请求，于是就没管。现在已经开发到这个阶段了，数据都存放在仓库显然不是很合理，而且在某些情况下调用数据与实际开发不符，所以估计  下一步先把接口写好 ，才会进行下一步的业务逻辑。',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
            {
                id: 2,
                artImages: new URL(`@/assets/images/news/10.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
            {
                id: 3,
                artImages: new URL(`@/assets/images/news/11.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
            {
                id: 4,
                artImages: new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
            {
                id: 5,
                artImages: new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
            {
                id: 6,
                artImages: new URL(`@/assets/images/news/6.jpg`, import.meta.url).href,
                artTitle: 'What makes you beautiful',
                artContent: 'Baby you light up my world like nobody else The way that you flip your hair gets me overwhelmed But when you smile at the ground it aint hard to tell',
                athuorImages: userStore().$state.userAvatar,
                athuorName: userStore().$state.userName,
                artDate: '2023/1/16',
            },
        ]
    })
})