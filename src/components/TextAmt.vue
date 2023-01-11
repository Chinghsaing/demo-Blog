<template>
    <div class="typer">
        <div class="typer-content">
            <p class="typer-static"></p>
            <!-- 动态变化的内容-->
            <p class="typer-dynamic">
                <span class="cut">
                    <span class="word" v-for="(letter, index) in init.words" :key="index">{{ letter }}</span>
                </span>
                <!-- 模拟光标-->
                <span v-show="init.status" class="typer-cursor"></span>
            </p>
        </div>
    </div>
</template>


<script setup lang="ts">
import { watch, reactive, onMounted } from 'vue'
import { useStore } from '@/store/HomeState'
const store = useStore()

interface initType {
    words: Array<string>
    str: string
    letters: Array<string>
    order: number
    status: boolean
}

interface textType {
    str_1:string
    str_2:string
    str_3:string
    str_4:string
}


const init: initType = reactive({
    words: store.$state.TextAmtData.words, 
    str: store.$state.TextAmtData.str, //str初始化
    letters: store.$state.TextAmtData.letters,            //str分解后的字母数组
    order: store.$state.TextAmtData.order,              //表示当前是第几句话
    status: store.$state.TextAmtData.status,
})

const textBox: textType = reactive({
    str_1:store.$state.TextAmtChangeData.str_1,
    str_2:store.$state.TextAmtChangeData.str_2,
    str_3:store.$state.TextAmtChangeData.str_3,
    str_4:store.$state.TextAmtChangeData.str_4,
})

watch(init, (newVal, oldVal) => {
    if (init.order % 4 == 1) {
        init.str = textBox.str_1
    }
    else if (init.order % 4 == 2) {
        init.str = textBox.str_2
    }
    else if (init.order % 4 == 3) {
        init.str = textBox.str_3
    }
    else {
        init.str = textBox.str_4
    }
})

//定义方法
//      //开始输入的效果动画
function begin() {
    init.letters = init.str.split("")
    for (var i = 0; i < init.letters.length; i++) {
        setTimeout(write(i), i * 250)
    }
}

//      //开始删除的效果动画
function back() {
    let L = init.letters.length
    for (var i = 0; i < L; i++) {
        setTimeout(wipe(i), i * 50)
    }
}

//      //输入字母
function write(i: number) {
    return () => {
        let L = init.letters.length
        init.words.push(init.letters[i])
        if (i == L - 1) {
            setTimeout(function () {
                back()
            }, 2000)
        }
    }
}

//      //擦掉(删除)字母
function wipe(i: number) {
    return () => {
        init.words.pop()
        if (init.words.length == 0) {
            init.order++
            setTimeout(function () {
                begin()
            }, 300)
        }
    }
}

onMounted(() => {
    begin()
})
</script>


<style scoped lang="less">
.typer {
    box-sizing: border-box;
    height: 80px;

    .typer-content {
        font-weight: 50;
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        letter-spacing: 2px;

        .typer-dynamic {
            position: relative;

            .cut {
                color: @defult;
            }

            .typer-cursor {
                position: absolute;
                .publicWH(3px, 100%);
                top: 0;
                right: -10px;
                background-color: @defult;
                animation: flash 1.5s linear infinite;
            }
        }
    }
}
</style>

