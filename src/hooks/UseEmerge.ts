import { onMounted ,reactive} from 'vue'

export default function (obj:any) {
    let objTop = 0
    let showEmerge = reactive({
        transition:'',
        opacity:'',
    })
    function UseEmerge () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(objTop);
        
        if (scrollTop > objTop) {
            showEmerge['transition'] = 'all 1s ease'
            showEmerge['opacity'] = '1!important'  
        } else {
            showEmerge['transition'] = 'none'
            showEmerge['opacity'] = '0'
        }
    }
        
    onMounted(() => {
        objTop = obj.value.offsetTop
    })

    window.addEventListener("scroll", UseEmerge)
    return showEmerge

}