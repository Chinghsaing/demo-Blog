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
    let titles:any[]=[]
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