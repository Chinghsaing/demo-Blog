<template>
    <div class="contaniner" v-if="store.$state.getDataSuccess">
        <div class="top-container"
            :style="{ 'background-image': 'url(' + store.$state.ArtData[id - 1].artImages + ')' }">
            <div class="top-container-mask">
                <NavBar TextColor="color:#fff"></NavBar>
                <div class="title-container">
                    <div class="title-box">
                        <h1>{{ store.$state.ArtData[id - 1].artTitle }}</h1>
                        <div class="detail-box">
                            <div>
                                <el-icon>
                                    <Document />
                                </el-icon>
                                <span>发表于{{ store.$state.ArtData[id - 1].date }}</span>
                            </div>
                            <span style="margin: 10px;">|</span>
                            <div>
                                <el-icon>
                                    <Clock />
                                </el-icon>
                                <span>更新于{{ store.$state.ArtData[id - 1].date }}</span>
                            </div>
                            <span style="margin: 10px;">|</span>
                            <div>
                                <el-icon>
                                    <Comment />
                                </el-icon>
                                <span>评论数6</span>
                            </div>
                            <span style="margin: 10px;">|</span>
                            <div>
                                <el-icon>
                                    <StarFilled />
                                </el-icon>
                                <span>收藏量9</span>
                            </div>
                            <span style="margin: 10px;">|</span>
                            <div>
                                <el-icon>
                                    <View />
                                </el-icon>
                                <span>阅读量999+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="AuthorInfoCard" style="margin:20px 0 0 20px;">
                <AuthorInfoCard></AuthorInfoCard>
            </div>
            <div style="width: 55%;">
                <div class="artdetail-container">
                    <div class="title-icon-box" style="padding: 20px;">
                        <img class="title-icon" :src="logoUrl">
                        <img class="title-icon" :src="logoUrl">
                        <img class="title-icon" :src="logoUrl">
                    </div>
                    <div>
                        <ArtDetail></ArtDetail>
                    </div>
                </div>
                <div style="background-color: #fff;margin-top: 20px;border-radius: 10px;">
                    <div>
                        <Comments></Comments>
                    </div>
                    <div class="commentcard-box"
                        style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
                        <CommentCard></CommentCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from '@/store/ArticleState'
import NavBar from '@/components/NavBar.vue'
import AuthorInfoCard from '@/components/Article/AuthorInfoCard.vue'
import ArtDetail from '@/components/Article/ArtDetail.vue'
import Comments from '@/components/Article/Comments.vue'
import CommentCard from '@/components/Article/CommentCard.vue'
const store = useStore()
const route = useRoute()
const id = Number(route.params.id)
const logoUrl = new URL(`@/assets/images/logo.png`, import.meta.url).href
document.body.scrollTop = 0

</script>

<style scoped lang="less">
.contaniner {
    .publicWH(100%, auto);

    .top-container {
        .publicWH(100%, 400px);
        background-size: cover;
        background-position: 100% center;

        .top-container-mask {
            background-color: rgba(0, 0, 0, .4);

            .title-container {
                .publicWH(100%, 342px);
                .publicFlex(center, none, center);
                .publicMP(0px, 0px);

                .title-box {
                    .publicWH(50%, auto);

                    h1 {
                        .publicFlex(none, none, center);
                        .publicMP(0px, 0px);
                        word-break: break-word;
                        color: @defaultFont2;
                    }

                    .detail-box {
                        .publicFlex(none, none, center);
                        color: @defaultFont2;

                        div {
                            .publicFlex(center, none, center);
                        }
                    }
                }
            }
        }
    }

    .content-container {
        .publicFlex(none, none, center);
        flex-direction: row-reverse;
        .publicWH(100%, auto);
        background-color: @defaultBG;


        .artdetail-container {
            .publicMP(20px 0 0 0, 0);
            .publicWH(auto, auto);
            background-color: #fff;
            border-radius: 10px;

            .title-icon {
                .publicWH(32px, 32px)
            }
        }
    }
}
</style>