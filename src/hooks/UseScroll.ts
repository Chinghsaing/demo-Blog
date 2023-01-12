import { ref } from 'vue'

export default function () {
    let fixed = ref(false)

    function UseScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let innerHeight = window.innerHeight
        let res = scrollTop - innerHeight
        res >= 25 ? (fixed.value = true) : (fixed.value = false)
    }
    window.addEventListener('scroll', UseScroll)

    return fixed
}




