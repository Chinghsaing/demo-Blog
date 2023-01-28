<template>
    <div class="logo-box-container" :style="BackColor">
        <div class="logo-box">
            <img class="el-img" :src="data.logoUrl">
            <h2 :style="TextColor">{{ data.title }}</h2>
        </div>
        <div class="buttom-group">
            <div v-if="signstore.$state.showUserName" class="user-box">
                <ul>
                    <li class="li1"><span>{{ signstore.$state.username }}</span></li>
                    <li class="li2">注销</li>
                    <li class="li2">注销</li>
                    <li class="li2">注销</li>
                    <li class="li2">注销</li>
                </ul>
            </div>
            <el-button v-if="!signstore.$state.showUserName" type="primary" style="--el-button-hover-bg-color:transparent" size="large"
                @click="signstore.$state.showSignView = true" color="transparent" :icon="data.buttonIcon.button_1_icon"
                :style="TextColor">{{
                    data.buttonText.button_1
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" :icon="data.buttonIcon.button_2_icon" :style="TextColor">{{
                    data.buttonText.button_2
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" :icon="data.buttonIcon.button_3_icon" :style="TextColor">{{
                    data.buttonText.button_3
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large"
                @click="router.push('/')" color="transparent" :icon="data.buttonIcon.button_4_icon"
                :style="TextColor">{{
                    data.buttonText.button_4
                }}</el-button>
            <el-button type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" :icon="data.buttonIcon.button_5_icon" :style="TextColor">{{
    data.buttonText.button_5
                }}</el-button>
        </div>
    </div>
    <div>
        <Sign></Sign>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/HomeState"
import { useStore as useSignStore } from "@/store/SignState"
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Sign from "./Sign.vue";
const router = useRouter()
const props = defineProps({
    BackColor: String,
    TextColor: String,
})

const { BackColor } = toRefs(props)
const store = useStore()
const signstore = useSignStore()
//数据
const data = reactive({
    logoUrl: store.$state.NavBarData.logoUrl,
    title: store.$state.NavBarData.title,
    buttonText: store.$state.NavBarData.buttonText,
    buttonIcon: store.$state.NavBarData.buttonIcon,
})


</script>

<style scoped lang="less">
.logo-box-container {
    .publicWH(100%, 58px);
    .publicMP(0, 0 5% 0 5%);
    .publicFlex(center, none, space-between);
    box-sizing: border-box;

    .logo-box {
        .publicWH(fit-content, fit-content);
        color: @defaultFont;
        display: flex;
        align-items: center;

        img {
            .publicWH(32px, 32px);
        }
    }

    .buttom-group {
        .publicWH(auto, 40px);
        .publicFlex(none, none, none);
        flex-direction: row-reverse;

        .user-box {
            position: relative;
            .publicWH(68px, 40px);
            margin: 0 0 0 12px;
            font-size: 16px;
            font-weight: bold;
            color: @defaultFont;
            padding: 0px 6px;

            ul {
                user-select: none;
                .publicWH(68px, 38px);
                position: absolute;
                .publicMP(0px, 0px);
                list-style: none;
                overflow: hidden;
                border-radius: 10px;

                &:hover {
                    .publicWH(68px, auto);
                }

                .li1 {
                    .publicFlex(center, none, none);
                    .publicWH(80px, 40px);

                    &:hover {
                        color: @defaultFonHV;
                    }

                    span {
                        .onelineEllipsis(16px);
                    }
                }

                .li2 {
                    .publicFlex(center, none, center);
                    .publicWH(68px, 38px);
                    padding: 5px 0px;

                    &:hover {
                        color: @defaultFonHV;
                    }
                }
            }
        }

        .el-button {
            font-size: 16px;
            font-weight: bold;
            border: none;
            .publicMP(0 0 0 12px, 1px 6px);
            color: @defaultFont;

            &:hover {
                background-color: @defaultCR;
                border-bottom: 4px solid @defaultFont;
            }

            &:active {
                background-color: @defaultCR;
            }
        }
    }
}

@media only screen and(max-width: 670px) {
    .logo-box-container {
        flex-direction: column !important;
        justify-content: space-around !important;

        h2 {
            font-size: 16px;
            margin: 0px 0 0 0;
        }

        img {
            .publicWH(16px, 16px) !important
        }

        .user-box {
            .publicWH(50px, 24px) !important;

            ul {
                .publicWH(50px, 24px) !important;

                &:hover {
                    .publicWH(50px, auto) !important;
                }

                span {
                    .publicWH(50px, 20px) !important;
                    font-size: 12px !important;
                }

                li {
                    .publicWH(50px, 24px) !important;
                    font-size: 12px !important;
                }
            }
        }

        .el-button {
            font-size: 12px !important;
            height: 20px !important;

            &:hover {
                background-color: @defaultCR !important;
                border-bottom: 2px solid @defaultFont !important;
            }
        }
    }
}
</style>