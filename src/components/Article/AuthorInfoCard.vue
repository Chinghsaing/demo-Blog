<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <div class="main-container">
                <el-avatar icon="el-icon-user-solid" shape="circle" :src="store.$state.ArtData[id-1].author.avatar" fit="fill"></el-avatar>
                <span class="name">{{ store.$state.ArtData[id-1].author.username }}</span>
                <p class="name-tag">{{ store.$state.ArtData[id-1].author.nametag }}</p>
                <div class="locate-box">
                    <el-icon size="18">
                        <Location />
                    </el-icon>
                    <p>Guangdong, China</p>
                </div>
                <div style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-button type="primary" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        <p class="select-num">{{ store.$state.ArtData[id-1].author.article.length }}</p>
                    </div>
                    <div class="select">
                        <el-button type="primary" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        <p class="select-num">{{ store.$state.ArtData[id-1].author.follows }}</p>
                    </div>
                    <div class="select">
                        <el-button type="primary" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">喜欢</el-button>
                        <p class="select-num">{{ store.$state.ArtData[id-1].author.like }}</p>
                    </div>
                </div>
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
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArticleState';
import { useStore as useSignStore } from "@/store/SignState";
import { useRoute } from 'vue-router'
const store = useStore()
const signstore = useSignStore()
const route = useRoute()
const id:number =  Number(route.params.id)
</script>

<style scoped lang="less">
.el-card {
    .publicWH(300px, 500px);
    border-radius: 10px;
    .main-container {
        .publicFlex(center, none, none);
        flex-direction: column;
        .el-avatar {
            .publicMP(20px 0 0 0, 0px);
            .publicWH(100px, 100px);
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
        .locate-box {
            .publicFlex(center, none, none);
            .publicMP(5px, 0px);
            p {
                .publicMP(0px, 0px);
                .publicFont(14px, 0, @sfontColor, 1px);
            }
        }
        .button-box {
            margin-top: 20px;
            .publicFlex(none, none, center);
            .publicWH(100%, 100%);
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
}
</style>