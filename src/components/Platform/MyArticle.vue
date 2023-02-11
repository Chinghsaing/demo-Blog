<template>
    <div class="article-container" v-for="item in store.$state.ArtUser" :key="item.artId">
        <el-card shadow="hover" :body-style="{ padding: '0px', height: '100px', display: 'flex' }"
            style="border-radius: 10px;">
            <div class="img-box">
                <el-image :src="item.artImages" fit="cover" :lazy="true" style="width: 100%;height: 150px;"></el-image>
            </div>
            <div class="main-box">
                <div class="content-box">
                    <div class="title-box">
                        <span>{{item.artTitle}}</span>
                    </div>
                    <div>
                        <p>{{ delHtmlTag(item.artContent) }}</p>
                    </div>
                </div>
                <div class="manage-box">
                    <div class="setting-icon">
                        <el-icon size="32">
                            <Setting />
                        </el-icon>
                    </div>
                    <div class="setting-box">
                        <div class="delete-box">
                            <el-icon size="24">
                                <Delete />
                            </el-icon>
                        </div>
                        <div class="lock-box">
                            <el-icon size="24">
                                <Unlock />
                            </el-icon>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
  

<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
import { useStore as usePlatformStore } from '@/store/PlatformState'
import { delHtmlTag } from '@/hooks/hooks'
import { useRoute } from 'vue-router'
const store = useStore()
const pfstore = usePlatformStore()
const route = useRoute()

pfstore.$state.menuActive = route.path
store.getUserArticleList()
</script>


<style scoped lang="less">
.article-container {
    margin-bottom: 20px;
    .el-card {
        .publicWH(100%, 150px);

        .img-box {
            .publicWH(40%, 150px);
        }

        .main-box {
            .publicWH(60%, 100px);
            display: flex;
            justify-content: space-between;

            .content-box {
                box-sizing: border-box;
                .publicWH(85%, 100px);
                padding: 20px;

                .title-box {
                    span {
                        display: flex;
                        justify-content: center;
                        font-weight: 700;
                        color: @pfontColor;
                        .onelineEllipsis(20px);
                    }
                    margin-bottom: 10px
                }

                p {
                    .morelinesEllipsis(16px,3);
                    color: @sfontColor;
                    margin: 0;
                    padding: 0;
                }
            }


            .manage-box {
                position: relative;
                transition: all 2s ease;
                .publicWH(15%, 150px);
                color: @defalutTextHv;

                &:hover .setting-icon {
                    opacity: 0;
                }

                &:hover .setting-box {
                    opacity: 1;
                }

                .setting-icon {
                    position: absolute;
                    .publicFlex(center, auto, center);
                    .publicWH(100%, 100%);
                    opacity: 1;
                    transition: all .5s ease;
                }

                .setting-box {
                    position: absolute;
                    .publicWH(100%, 150px);
                    opacity: 0;
                    transition: all .5s ease;

                    .delete-box {
                        border-radius: 10px 10px 0 0;
                        .publicFlex(center, auto, center);
                        .publicWH(100%, 50%);
                        color: #fff;
                        background-color: #d64d4d;
                        transition: all .5s ease;

                        &:hover {
                            background-color: #ff6060;
                        }
                    }

                    .lock-box {
                        border-radius: 0 0 10px 10px;
                        .publicFlex(center, auto, center);
                        .publicWH(100%, 50%);
                        color: #fff;
                        background-color: #3c88d5;
                        transition: all .5s ease;

                        &:hover {
                            background-color: #40a0ff;
                        }
                    }
                }
            }
        }
    }
}
</style>