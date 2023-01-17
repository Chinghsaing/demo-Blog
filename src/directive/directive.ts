export const directive = (app:any) => {
    app.directive('Emerge' , (el: HTMLElement) => {
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
    app.directive('Fixed',(el:any)=>{ 
        el.firstElementChild.style.height = ''
        function Fixed() {
            let elHeight = el.getBoundingClientRect().height
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let clientHeight = document.body.clientHeight
            if(scrollTop>clientHeight - elHeight-15){
                el.firstElementChild.style.backgroundColor = 'rgba(0,0,0)'
            }else{
                el.firstElementChild.style.backgroundColor = ''
            }
        }
        window.addEventListener('scroll', Fixed)
    })
}