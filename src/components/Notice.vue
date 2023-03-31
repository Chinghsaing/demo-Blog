<template>
    <div v-if="getDataSuccess">
        <el-card shadow="always" :body-style="{ padding: '30px' }" style="border-radius: 10px;">
            <div>
                <div class="title">
                    <h3>公告栏</h3>
                </div>
                <div>
                    <ul>
                        <li>欢迎来自</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ location.ad_info.province }}</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ location.ad_info.city }}</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ location.ad_info.district }}</li>
                        <li>的小伙伴来到本站!</li>
                    </ul>
                    <ul style="margin: 20px 0 ;">
                        <li>今天天气状况:</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ weather.temp }}°</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ weather.text }}</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;margin-left: 5px;">{{ weather.windDir }}</li>
                        <li style="color: rgb(232, 93, 204);font-weight: bold;">{{ weather.windScale }}级</li>
                    </ul>
                    <div class="time">
                        <div class="clock-time">{{ time }}</div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { getWeather } from '@/api/api'
import { ref, onMounted } from 'vue'
import { jsonp } from 'vue-jsonp'
let getDataSuccess = ref(false)
let location = ref()
let weather = ref()
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

function Init() {
    jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
        key: 'CPOBZ-UUGEF-DJBJP-JMNIH-5Q2L6-Y2BVE',
        sig: 'f75e881938a4e0918ae1a5a6e25e5b2e',
        output: 'jsonp',
    }).then(res => {
        location.value = res.result
        getWeather({
            location: String(res.result.location.lng) + ',' + String(res.result.location.lat),
            key: '7858d2e5282049238f153a77e5178881'
        }).then((res2:any) => {
            weather.value = res2.now
            getDataSuccess.value = true
        })
    })

}
//初始化
Init()
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
    ul{
        .publicMP(0, 0);
        list-style: none;
        li{
            display: inline-block
        }
    }
    .time {
        .publicFlex(center, none, center);
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