import { useStore } from '@/store/ArticleState'
import { nextTick } from 'vue'
export const getNowTime = () => {
    let dt = new Date()
    let y = dt.getFullYear()
    let mt = (dt.getMonth() + 1).toString().padStart(2, '0')
    let day = dt.getDate().toString().padStart(2, '0')
    let h = dt.getHours().toString().padStart(2, '0')
    let m = dt.getMinutes().toString().padStart(2, '0')
    let nowtime = y + "-" + mt + "-" + day + " " + h + ":" + m
    return nowtime
}

export const delHtmlTag = (str: string) => {
    return str.replace(/<[^>]+>/g, '').replaceAll('&nbsp;', '')
}

export const emojis = () => {
    const emojis = [
        '😀', '😄', '😅', '🤣', '😂', '😉', '😊', '😍', '😘', '😜',
        '😝', '😏', '😒', '🙄', '😔', '😴', '😷', '🤮', '🥵', '😎',
        '😮', '😰', '😭', '😱', '😩', '😡', '💀', '👽', '🤓', '🥳',
        '😺', '😹', '😻', '🤚', '💩', '👍', '👎', '👏', '🙏', '💪'
    ]
    let img = emojis.map(emoji => ({ text: emoji }))
    return img
}

export const getTitle = (ref: any) => {
    const store = useStore()
    const titleTag = ["H1", "H2", "H3"]
    let titles: any[] = []
    nextTick(() => {
        ref.value.childNodes.forEach((e: any, index: any) => {
            if (titleTag.includes(e.nodeName)) {
                const id = "header-" + index
                e.setAttribute("id", id)
                titles.push({
                    id: id,
                    title: e.innerHTML,
                    level: Number(e.nodeName.substring(1, 2)),
                    nodeName: e.nodeName,
                    read: false
                })
            }
        })
        store.$state.CataLog = titles
    })
}
export const getReading = () => {
    const store = useStore()
    //获取页面滚动值
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //遍历小标题
    for (let i = 0; i < store.$state.CataLog.length; i++) {
        //获取小标题距离屏幕顶端的距离
        var offsetTop = (document.querySelector("#" + store.$state.CataLog[i].id) as HTMLElement).offsetTop
        //根据条件做出判断，我这里是当小标题和屏幕顶端的距离小于300且没有被标明在读时，就将其背景颜色改变。
        if ((offsetTop - scrollTop) < 50 && (offsetTop - scrollTop) > 0 && store.$state.CataLog[i].read == false) {
            store.$state.CataLog[i].read = true
            //再将其他小标题背景色改成未读的背景色
            for (let j = 0; j < store.$state.CataLog.length; j++) {
                if (j != i) {
                    store.$state.CataLog[j].read = false
                }
            }
        }
    }
}