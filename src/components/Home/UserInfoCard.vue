<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px',height:'100%' }" style="border-radius: 10px;">
            <div class="main-container">
                <el-avatar icon="el-icon-user-solid" size="large" shape="circle" :src="store.$state.userAvatar"
                    fit="fill"></el-avatar>
                <span class="name">{{ store.$state.userName }}</span>
                <p class="name-tag">{{ store.$state.userNameTag }}</p>
                <div v-if="signstore.$state.showUserCradInfo" style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-badge :value="10" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userArticle }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="3" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userFollows }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="5" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">喜欢</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userLike }}</p>
                    </div>
                </div>
                <div v-if="!signstore.$state.showUserCradInfo" class="button-box">
                    <el-link :underline="false" href="javascript:;" @click="">
                        <div>
                            <h2>登录 / 注册</h2>
                        </div>
                    </el-link>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useStore } from '@/store/UserInfoState'
import { useStore as useSignStore } from "@/store/SignState"
const store = useStore()
const signstore = useSignStore()
</script>

<style scoped lang="less">
.el-card {
    .publicWH(300px, 350px);

    .main-container {
        .publicFlex(center, none, none);
        flex-direction: column;

        .el-avatar {
            .publicMP(20px 0 0 0, 0px);
            .publicWH(100px, 100px);
            border: 4px solid rgb(245, 108, 108);
            box-shadow: 0 0px 30px rgba(251, 20, 20, 0.4);
        }

        .name {
            .publicMP(10px 0 0 0, 0px);
            .publicFont(28px, 600, @pfontColor, 0px)
        }

        .name-tag {
            .publicMP(5px, 0px);
            .publicFont(14px, 0, @sfontColor, 1px);
        }

        .select {
            .publicFlex(center, none, none);
            flex-direction: column;
            .publicMP(10px 10px, 0px);

            .el-button {
                color: @pfontColor;
                border: none;
                transition: all .2s ease;

                &:hover {
                    background-color: @defaultHv;
                }

                &:active {
                    background-color: @defaultAct;
                }
            }

            .select-num {
                .publicMP(5px 0, 0px);
                font-weight: bold;
            }
        }
    }

    .button-box {
        margin: 45px 0px;
        .publicFlex(none, none, center);
        .publicWH(100%, 100%);
        background-color: rgb(241, 129, 219);
        border-radius: 20px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: @defaultTitle;
        }

        h2 {
            margin: 5px 0;
            color: @defaultFont2;
            font-size: 18px;
            font-weight: 800;
        }
    }
}
</style>