<template>
    <TransitionGroup name="fade">
        <div class="article-container" v-for="item in store.$state.ArtUser" :key="item.artId">
            <el-card shadow="hover" :body-style="{ padding: '0px', height: '100px', display: 'flex' }"
                style="border-radius: 10px;">
                <div class="img-box">
                    <el-image :src="item.artImages" fit="cover" :lazy="true"
                        style="width: 100%;height: 150px;"></el-image>
                </div>
                <div class="main-box">
                    <div class="content-box">
                        <div class="title-box">
                            <span>{{ item.artTitle }}</span>
                        </div>
                        <div>
                            <p>{{ delHtmlTag(item.artContent) }}</p>
                        </div>
                    </div>
                    <div class="manage-box">
                        <div class="setting-icon">
                            <el-icon size="24">
                                <Setting />
                            </el-icon>
                        </div>
                        <div class="setting-box">
                            <div class="delete-box" @click="deleteArticle(item.artId)">
                                <el-icon size="20">
                                    <Delete />
                                </el-icon>
                            </div>
                            <div class="lock-box">
                                <el-icon size="20">
                                    <Unlock />
                                </el-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </TransitionGroup>
</template>
  

<script setup lang="ts">
import { articleDelete } from '@/api/api'
import { useStore } from '@/store/PlatformState'
import { useStore as artStore} from '@/store/ArticleState'
import { delHtmlTag } from '@/hooks/hooks'
import { useRoute } from 'vue-router'
import { ElMessageBox } from 'element-plus'
const store = useStore()
const artstore = artStore()
const route = useRoute()

function deleteArticle(artId: number) {
    ElMessageBox({
        title: '警告',
        message: '此操作会删除文章及其所有评论，你确定吗?',
        confirmButtonText: '取消',
        showCancelButton: true,
        cancelButtonText: '确定',
        confirmButtonClass: 'cancelBtn',
        cancelButtonClass: 'confBtn',
        type: 'warning',
        appendTo: '.platform-container',
        showClose: false,
    })
        .then(() => { })
        .catch(() => {
            articleDelete({ 'artId': artId }).then((res: any) => {
                if (res.code === 800) {
                    for (let i = 0; i < store.$state.ArtUser.length; i++) {
                        if (store.$state.ArtUser[i].artId === artId) {
                            store.$state.ArtUser.splice(i, 1)
                        }
                    }
                    for (let i = 0; i < artstore.$state.ArtData.length; i++) {
                        if (artstore.$state.ArtData[i].artId === artId) {
                            artstore.$state.ArtData.splice(i, 1)
                        }
                    }
                }
            })
        })
}

store.$state.menuActive = route.path
store.getUserArticleList()
</script>


<style scoped lang="less">
:deep(.el-message-box) {
    border-radius: 10px !important;
}

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
                .publicMP(0, 20px);

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
                    .morelinesEllipsis(16px, 3);
                    color: @sfontColor;
                    .publicMP(0, 0);
                }
            }


            .manage-box {
                position: relative;
                transition: all 2s ease;
                .publicWH(15%, 150px);
                color: @defaultTextHv;

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
                        color: @defaultFont2;
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
                        color: @defaultFont2;
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<style lang="less">
.cancelBtn {
    background-color: @buttonColor !important;
    border: none !important;
    color: @defaultFont2 !important;
    border-radius: 10px !important;

    &:hover {
        background-color: @buttonHV !important;
    }

    &:focus-visible {
        outline: none !important;
    }
}

.confBtn {
    background-color: @buttonWhite !important;
    border: 1px solid @defaultCancelBorder !important;
    color: @defaultCancelText !important;
    border-radius: 10px !important;

    &:hover {
        background-color: @defaultFont2 !important;
    }

    &:focus-visible {
        outline: none !important;
    }
}
</style>