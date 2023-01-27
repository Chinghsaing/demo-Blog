<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px' }" style="border-radius: 10px;">
            <div class="main-container">
                <el-avatar icon="el-icon-user-solid" size="large" shape="circle" :src="UserInfoData.avatar" fit="fill"></el-avatar>
                <span class="name">{{UserInfoData.name}}</span>
                <p class="name-tag">{{UserInfoData.tag}}</p>
                <div style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-badge :value="10" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        </el-badge>

                        <p class="select-num">{{UserInfoData.article}}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="3" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        </el-badge>

                        <p class="select-num">{{UserInfoData.follows}}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="5" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">喜欢</el-button>
                        </el-badge>

                        <p class="select-num">{{UserInfoData.follower}}</p>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/UserInfoState'
const store = useStore()
console.log();

const UserInfoData = {
    name:store.$state.UserInfoData[0].userName,
    tag:store.$state.UserInfoData[0].userNameTag,
    avatar:store.$state.UserInfoData[0].userAvatar,
    article:store.$state.UserInfoData[0].userArticle,
    follows:store.$state.UserInfoData[0].userFollows,
    follower:store.$state.UserInfoData[0].userFollower
}
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
            border: 4px solid rgb(245,108,108);
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
}



</style>