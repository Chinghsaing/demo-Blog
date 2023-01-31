<template>
    <div class="contaniner">
        <div class="top-container" :style="{ 'background-image': 'url(' + articleInfo.artImages + ')' }">
            <div class="top-container-mask">
                <NavBar TextColor="color:#fff"></NavBar>
                <div class="title-container">
                    <div class="title-box">
                        <h1>{{ articleInfo.artTitle }}</h1>
                        <div class="detail-box">
                            <div>
                                <el-icon>
                                    <Document />
                                </el-icon>
                                <span>发表于{{ articleInfo.artDate }}</span>
                            </div>
                            <span style="margin: 10px;">|</span>
                            <div>
                                <el-icon>
                                    <Clock />
                                </el-icon>
                                <span>更新于{{ articleInfo.artDate }}</span>
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
            <div>
                <AuthorInfoCard></AuthorInfoCard>
            </div>
            <div class="artdetail-container">
                <ArtDetail></ArtDetail>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/ArtState'
import NavBar from '@/components/NavBar.vue'
import AuthorInfoCard from '@/components/Article/AuthorInfoCard.vue'
import ArtDetail from '@/components/Article/ArtDetail.vue'

const store = useStore()
const route = useRoute()

const id = Number(route.params.id)

const articleInfo = reactive({
    artTitle: store.$state.ArtData[id - 1].artTitle,
    artImages: store.$state.ArtData[id - 1].artImages,
    artDate: store.$state.ArtData[id - 1].date,
})
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
        .publicWH(100%, 1000px);
        background-color: @defaultBG;


        .artdetail-container {
            .publicMP(20px 20px 0 0, 0);
            .publicWH(55%, auto)
        }
    }
}
</style>