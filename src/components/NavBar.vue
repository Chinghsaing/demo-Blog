<template>
    <div class="logo-box-container">
        <div class="logo-box">
            <img class="el-img" :src="data.logoUrl" >
            <h2>{{ data.title }}</h2>
        </div>
        <div class="buttom-group">
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" icon="User">{{
                    data.buttonText.button_1
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" icon="User">{{
                    data.buttonText.button_2
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" icon="User">{{
                    data.buttonText.button_3
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" icon="User">{{
                    data.buttonText.button_4
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" icon="User">{{
    data.buttonText.button_5
                }}</el-button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useStore } from "@/store/HomeState"
import { reactive } from 'vue'
const store = useStore()
//接口
interface dataType {
    logoUrl: string
    title: string
    buttonText: objType
}

interface objType {
    button_1: string
    button_2: string
    button_3: string
    button_4: string
    button_5: string
}
//数据
const data: dataType = reactive({
    logoUrl: store.$state.NavBarData.logoUrl,
    title: store.$state.NavBarData.title,
    buttonText: store.$state.NavBarData.buttonText
})
</script>

<style scoped lang="less">
.logo-box-container {
    .publicWH(100%, 0);
    .publicMP(0, 0 5% 0 5%);
    .publicFlex(center, none, space-between);
    box-sizing: border-box;

    .logo-box {
        .publicWH(fit-content, fit-content);
        color: @defult;
        display: flex;
        align-items: center;

        img {
            .publicWH(32px, 32px);
        }
    }

    .buttom-group {
        .publicFlex(none, none, none, );
        flex-direction: row-reverse;

        .el-button {
            font-size: 16px;
            font-weight: bold;
            border: none;
            .publicMP(0 0 0 12px, 1px 6px);

            &:hover {
                background-color: @defultBG;
                border-bottom: 4px solid @defult;
            }

            &:active {
                background-color: @defultBG;
            }
        }
    }
}
</style>