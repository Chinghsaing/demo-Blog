<template>
    <div>
        <el-card shadow="always" :body-style="{ padding: '30px' }" style="border-radius: 10px;">
            <div>
                <div class="title">
                    <h3>公告栏</h3>
                </div>
                <div>
                    <span>欢迎来自 <span style="color: rgb(232, 93, 204);font-weight: bold;">广东省 江门市 开平市</span> 的小伙伴来到本站!</span>
                    <p>今天气温 <span style="color: rgb(232, 93, 204);font-weight: bold;">12° - 24°</span> ,一天都是晴朗无云</p>
                    <div class="time">
                        <span>现在是北京时间</span>
                        <div class="clock-time">{{ time }}</div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
let time = ref()
let timerHelper = ref()
function zeroPadding(num: any, digit: any) {
    let zero = "";
    for (let i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}
function updateTime() {
    const cd = new Date();
    time.value =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);

}
onMounted(() => {
    timerHelper.value = setInterval(updateTime, 1000);
})
</script>

<style scoped lang="less">
.el-card {
    .publicWH(300px, auto);

    .title {
        .publicMP(0 0 10px 0, 0);

        h3 {
            .publicMP(0, 0);
        }
    }

    .time {
        .publicFlex(center,none,center);
        flex-direction: column;
        .clock-time {
            letter-spacing: 1px;
            font-size: 40px;
            padding: 20px 0 0;
            color: @defaultError;
            font-weight: bold;
        }
    }

}
</style>