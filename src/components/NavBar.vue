<template>
    <div class="logo-box-container" :style="BackColor">
        <div class="logo-box">
            <img class="el-img" :src="data.logoUrl">
            <h2 :style="TextColor">{{ data.title }}</h2>
        </div>
        <div class="buttom-group">
            <!-- <div v-if="signstore.$state.isLogin" class="user-box" :style="TextColor">
                <ul>
                    <li class="li1"><span>{{ userstore.$state.userName }}</span></li>
                    <li class="li2" @click="$router.push('/platform/account')" style="border-radius: 10px 10px 0 0;">个人</li>
                    <li class="li2">注销</li>
                    <li class="li2">注销</li>
                    <li class="li2" style="border-radius:0 0 10px 10px;" @click="logOut">注销</li>
                </ul>
            </div> -->
            <el-popover v-if="signstore.$state.isLogin" placement="bottom" width="150" trigger="hover"
                popper-class="userbox" :show-arrow="false" :hide-after="2">
                <template #reference>
                    <el-button class="name" type="primary" style="--el-button-hover-bg-color:transparent" size="large"
                        @click="signstore.$state.showSignView = true" color="transparent" :style="TextColor">
                        {{ userstore.$state.userName }}
                    </el-button>
                </template>
                <ul>
                    <li @click="$router.push('/platform/account')">个人</li>
                    <li @click="logOut">注销</li>
                </ul>
            </el-popover>
            <el-button v-else type="primary" style="--el-button-hover-bg-color:transparent" size="large" @click=""
                color="transparent" :icon="data.buttonIcon.button_1_icon" :style="TextColor">{{
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
import { useStore as useInfoStore } from "@/store/UserInfoState"
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Sign from "./Sign.vue";
const router = useRouter()
const props = defineProps({
    BackColor: String,
    TextColor: String,
})

const store = useStore()
const signstore = useSignStore()
const userstore = useInfoStore()
//数据
const data = reactive({
    logoUrl: store.$state.NavBarData.logoUrl,
    title: store.$state.NavBarData.title,
    buttonText: store.$state.NavBarData.buttonText,
    buttonIcon: store.$state.NavBarData.buttonIcon,
})

function logOut() {
    userstore.$reset()
    localStorage.removeItem('username')
    localStorage.removeItem('nickname')
    localStorage.removeItem('nametag')
    localStorage.removeItem('article')
    localStorage.removeItem('follows')
    localStorage.removeItem('like')
    localStorage.removeItem('avatar')
    localStorage.removeItem('token')
    signstore.$state.isLogin = false
}
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
<style lang="less">
.userbox {
    backdrop-filter: blur(5px) !important;
    background-color: transparent !important;
    .publicMP(0, 0) !important;
    border-radius: 10px !important;

    ul {
        box-sizing: border-box;
        .publicMP(0, 0);
        list-style: none !important;
        font-size: 14px;
        font-weight: bold;
        color: @defaultFont;

        li {
            user-select: none;
            border-radius: 10px !important;
            .publicFlex(center, none, center);
            padding: 10px 10px;

            &:hover {
                background-color: rgba(93, 93, 93, 0.1);
            }
        }
    }
}
</style>