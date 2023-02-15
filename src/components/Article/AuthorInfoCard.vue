<template>
    <div class="author-container">
        <div style="display: flex;align-items: center;flex-direction: column;">
            <div class="avatar-box">
                <el-avatar icon="el-icon-user-solid" shape="circle" :src="store.$state.ArtData[id - 1].author.avatar"
                    fit="fill"></el-avatar>
            </div>
            <span class="name">{{ store.$state.ArtData[id - 1].author.username }}</span>
            <p class="nickname">@{{ store.$state.ArtData[id - 1].author.nickname }}</p>
        </div>
      <div>
        <div style="display:flex;margin-top: 20px;border-radius: 10px;background-color: rgb(245,245,245);">
            <div class="select">
                <el-button type="primary" @click="" style="--el-button-hover-bg-color:transparent;" round
                    color="transparent">文章</el-button>
                <p class="select-num">{{ store.$state.ArtData[id - 1].author.article.length }}</p>
            </div>
            <div class="select">
                <el-button type="primary" @click="" style="--el-button-hover-bg-color:transparent;" round
                    color="transparent">关注</el-button>
                <p class="select-num">{{ store.$state.ArtData[id - 1].author.follows }}</p>
            </div>
            <div class="select">
                <el-button type="primary" @click="" style="--el-button-hover-bg-color:transparent;" round
                    color="transparent">喜欢</el-button>
                <p class="select-num">{{ store.$state.ArtData[id - 1].author.like }}</p>
            </div>
        </div>
      </div>
        <div>
            <div class="button-box">
                <el-link :underline="false" href="javascript:;" @click="">
                    <div>
                        <h2>关注</h2>
                    </div>
                </el-link>
            </div>
            <div class="button-box">
                <el-link :underline="false" href="javascript:;" @click="">
                    <div>
                        <h2>私信</h2>
                    </div>
                </el-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArticleState';
import { useStore as useSignStore } from "@/store/SignState";
import { useRoute } from 'vue-router'
const store = useStore()
const signstore = useSignStore()
const route = useRoute()

const id: number = Number(route.params.id)


</script>

<style scoped lang="less">
.author-container {
    padding-bottom: 20px;
    .publicWH(70%, 150px);
    .publicFlex(center, none, space-between);
    .avatar-box {
        .publicWH(64px, 64px);

        .el-avatar {
            .publicWH(64px, 64px);
        }
    }

    .name {
        .publicMP(10px 0 0 0, 0px);
        .publicFont(24px, 600, @pfontColor, 0px)
    }

    .nickname {
        .publicMP(0px, 0px);
        .publicFont(14px, 0, @defaultTextHv, 1px);
    }
    .tag{
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

    .button-box {
        margin-top: 20px;
        .publicFlex(none, none, center);
        .publicWH(150px, 30px);
        background-color: @buttonColor;
        border-radius: 20px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: @buttonHV;
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