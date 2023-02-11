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