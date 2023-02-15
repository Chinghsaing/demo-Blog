export const directive = (app: any) => {
    //元素浮现
    app.directive('Emerge', (el: HTMLElement) => {
        function ElementEmerge() {
            let scrollTop = window.innerHeight
            let elTop = el.getBoundingClientRect().top
            if (elTop <= scrollTop) {
                el.style.transition = 'all 1s ease'
                el.style.opacity = '1'
            } else {
                el.style.transition = 'none'
                el.style.opacity = '0'
            }
        }
        window.addEventListener("scroll", ElementEmerge)
    })
    //固定效果
    app.directive('Fixed', (el: any) => {
        function Fixed() {
            let elHeight = el.getBoundingClientRect().height
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let clientHeight = document.body.clientHeight
            let button = el.firstElementChild.firstElementChild.children[1].children
            if (scrollTop > window.innerHeight - elHeight) {
                el.firstElementChild.style.backgroundColor = 'rgb(236,159,221)'
                el.firstElementChild.firstElementChild.children[1].firstElementChild.firstElementChild.style.backgroundColor = 'rgb(236,159,221)'
                el.firstElementChild.firstElementChild.children[0].children[1].style.color = '#fff'
                for (let i = 0; i <= button.length - 1; i++) {
                    button[i].style.color = '#fff'
                }
            } else {
                el.firstElementChild.style.backgroundColor = ''
                el.firstElementChild.firstElementChild.children[0].children[1].style.color = ''
                el.firstElementChild.firstElementChild.children[1].firstElementChild.firstElementChild.style.backgroundColor = ''
                for (let i = 0; i <= button.length - 1; i++) {
                    button[i].style.color = ''
                }
            }
        }
        window.addEventListener('scroll', Fixed)
    })
    app.directive('focus', (el: any) => {
        el.querySelector('input').focus()
    })
    //回复显示Emoji框
    app.directive('ShowEmoji', (el: any) => {
        let flag = 0
        el.children[2].firstElementChild.addEventListener('click', () => {
            if (flag == 0) {
                el.children[2].firstElementChild.style.transition = 'all 1s ease'
                el.children[2].firstElementChild.style.transform = 'rotate(360deg)'
                el.parentElement.style.height = '310px'
                flag = 1
                return
            } else {
                el.children[2].firstElementChild.style.transition = 'all 1s ease'
                el.children[2].firstElementChild.style.transform = 'rotate(0deg)'
                el.parentElement.style.height = '137px'
                flag = 0
                return
            }
        })
    })
}