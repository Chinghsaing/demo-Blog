<template>
    <div class="contaniner" v-if="store.$state.getDataSuccess">
        <div class="top-container" :style="{ 'background-image': 'url(' + store.$state.ArtData[id - 1].artImages + ')' }">
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
                                    <Comment />
                                </el-icon>
                                <span>评论数{{ cmtstore.$state.comments.length }}</span>
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
            <div style="width: 60%;">
                <div class="artdetail-container">
                    <div class="title-icon-box" style="padding: 20px;display: flex;justify-content: space-between">
                        <div>
                            <img class="title-icon" :src="logoUrl">
                            <img class="title-icon" :src="logoUrl">
                            <img class="title-icon" :src="logoUrl">
                        </div>
                        <div>
                            <img class="title-icon" :src="logoUrl">
                            <img class="title-icon" :src="logoUrl">
                            <img class="title-icon" :src="logoUrl">
                        </div>
                    </div>
                    <div class="art-box">
                        <ArtDetail></ArtDetail>
                    </div>
                    <div class="time-box">
                        <span>文章最后更新于 {{
                            store.$state.ArtData[id - 1].date
                        }}</span>
                    </div>
                    <div class="art-link-box">
                        <ul>
                            <li>
                                <div>
                                    <span style="margin-right: 10px;">分享链接</span>
                                    <el-input v-model="link" prefix-icon="Link" readonly></el-input>
                                </div>
                            </li>
                            <li>
                                <div class="cc" style="margin-top: 10px">
                                    <span>许可协议</span>
                                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                                        style="width: 18px;height: 18px;">
                                        <svg t="1676632564926" class="cc-icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="6338" width="64" height="64">
                                            <path
                                                d="M345.714 704.571q87.429 0 146.857-59.428 8-10.286 1.715-20.572l-25.715-46.857q-3.428-7.428-13.714-9.714-9.143-1.143-15.428 6.286L437.143 576q-2.286 2.286-6.572 5.714t-10 7.429-13.428 8.286-16.286 7.714-19.143 5.428-21.428 2q-43.429 0-71.429-28.571t-28-72.571q0-43.429 27.429-71.715T348 411.43q21.143 0 40.857 8t28.857 16l9.143 8q6.286 6.285 14.857 5.714 9.143-1.143 13.715-8l30.285-44.572q7.429-11.428-1.143-22.285-1.714-2.286-6.285-6.857T461.143 354t-27.714-16-38.572-12.857-49.143-5.714q-84.571 0-140.571 55.142t-56 137.429q0 83.429 55.428 138t141.143 54.571z m360 0q87.429 0 146.857-59.428 8-10.286 2.286-20.572l-25.714-46.857q-4.572-8-14.286-9.714-9.143-1.143-15.428 6.286L797.143 576q-2.286 2.286-6.572 5.714t-10 7.429-13.428 8.286-16.286 7.714-19.143 5.428-21.428 2q-43.429 0-71.429-28.571t-28-72.571q0-43.429 27.429-71.715T708 411.43q21.143 0 40.857 8t28.857 16l9.143 8q6.286 6.285 14.857 5.714 9.143-1.143 13.715-8l30.285-44.572q7.429-11.428-1.143-22.285-1.714-2.286-6.285-6.857T821.143 354t-27.714-16-38.572-12.857-49.143-5.714q-84 0-140.285 55.142T509.143 512q0 83.429 55.428 138t141.143 54.571zM512 91.43q-85.714 0-163.429 33.428t-134 89.714-89.714 134T91.43 512t33.428 163.429 89.714 134 134 89.714T512 932.57t163.429-33.428 134-89.714 89.714-134T932.57 512t-33.428-163.429-89.714-134-134-89.714T512 91.43zM512 0q104 0 198.857 40.571t163.429 109.143 109.143 163.429T1024 512t-40.571 198.857-109.143 163.429-163.429 109.143T512 1024t-198.857-40.571-163.429-109.143T40.571 710.857 0 512t40.571-198.857 109.143-163.429T313.143 40.571 512 0z"
                                                fill="#606266" p-id="6339"></path>
                                        </svg>
                                    </a>
                                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA-4.0</a>
                                </div>
                            </li>
                        </ul>
                        <svg t="1676211916210" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3704" width="64" height="64">
                            <path
                                d="M669.781333 130.752c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z"
                                fill="#3D3D3D" p-id="3705"></path>
                        </svg>
                        <span>觉得不错，可以点个喜欢!</span>
                    </div>
                    <div class="comment-box">
                        <div>
                            <div class="title-icon-group">
                                <div class="title">
                                    <img class="title-icon" :src="logoUrl">
                                    <div>评论</div>
                                    <img class="title-icon" :src="logoUrl">
                                </div>
                                <div>
                                    <img class="title-icon" :src="logoUrl">
                                    <img class="title-icon" :src="logoUrl">
                                    <img class="title-icon" :src="logoUrl">
                                </div>
                            </div>
                            <Comments></Comments>
                        </div>
                        <div class="coment-count">
                            <span>全部评论 | {{ cmtstore.$state.comments.length }}条</span>
                        </div>
                        <div class="commentcard-box">
                            <CommentCard></CommentCard>
                        </div>
                        <div v-if="cmtstore.$state.comments.length === 0" class="no-comment">
                            <span>没有更多评论，等你到来哦~</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="author-box">
                <AuthorInfoCard style="margin-bottom: 20px;"></AuthorInfoCard>
                <el-affix position="top" :offset="20">
                    <CateLog></CateLog>
                </el-affix>
            </div>
        </div>
        <Copyright></Copyright>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from '@/store/ArticleState'
import { useStore as cmtStore } from '@/store/CommentState'
import NavBar from '@/components/NavBar.vue'
import AuthorInfoCard from '@/components/Article/AuthorInfoCard.vue'
import ArtDetail from '@/components/Article/ArtDetail.vue'
import Comments from '@/components/Article/Comments.vue'
import CommentCard from '@/components/Article/CommentCard.vue'
import Copyright from '@/components/Copyright.vue'
import CateLog from '@/components/Article/CateLog.vue'
const store = useStore()
const cmtstore = cmtStore()
const route = useRoute()
const link = window.location.href
const id = Number(route.params.id)
const logoUrl = new URL(`@/assets/images/logo.png`, import.meta.url).href
document.body.scrollTop = 0

</script>

<style scoped lang="less">
:deep(.el-input__wrapper) {
    border-radius: 10px;
}

:deep(.el-input__wrapper) {
    --el-input-focus-border-color: @defaultErrorBorder;
}

.contaniner {
    .publicWH(100%, auto);

    .top-container {
        .opacityAmt(1s, ease);
        .publicWH(100%, 280px);
        background-size: cover;
        background-position: 100% center;

        .top-container-mask {
            background-color: rgba(0, 0, 0, .5);

            .title-container {
                .publicWH(100%, 222px);
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
        flex-direction: reverse;
        .publicWH(100%, auto);
        background-color: @defaultBG;
        .bottomSlideIn(1s, ease);
        padding-bottom: 10px;
        padding-top: 20px;

        .artdetail-container {
            .publicMP(0, 0);
            .publicWH(auto, auto);
            background-color: #fff;
            border-radius: 10px;

            .title-icon {
                .publicWH(32px, 32px)
            }

            .art-box {
                .publicMP(0px, 0 50px 50px 50px);
            }

            .time-box {
                .publicMP(0px, 0 50px 10px 50px);

                span {
                    color: #666666;
                    font-size: 12px;
                }
            }

            .art-link-box {
                padding: 50px 0 50px 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                ul {
                    .publicWH(70%,auto);
                    .publicMP(0,0px);
                    .publicFlex(center, none, center);
                    flex-direction: column;
                    list-style: none;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border-left: 5px solid @defaultError;
                    li{
                        .publicWH(474px,32px);
                    }
                    .el-input {
                        .publicWH(400px, auto);
                        font-size: 18px
                    }   

                    .cc {
                        .publicFlex(center, none, none);

                        span {
                            margin-right: 10px;
                        }

                        a {
                            text-decoration: none;
                            color: #606266;
                        }

                        .cc-icon {
                            display: inline-block;
                            .publicWH(18px, 18px);
                        }
                    }

                    span {
                        font-weight: bold;
                        font-size: 16px;
                    }
                }
                .icon {
                        margin-top: 50px;
                        .publicWH(50px, 50px);
                        transition: all 1s ease;

                        path {
                            fill: @defaultLike;
                        }

                        &:hover {
                            transform: rotate(360deg);
                        }
                    }
            }

            .comment-box {
                .publicMP(30px 0 0 0, 0);

                .title-icon-group {
                    .publicMP(0px, 0 20px);
                    .publicFlex(none, none, space-between);

                    .title {
                        .publicFlex(center, none, none);
                        font-size: 18px;
                        font-weight: bold;
                    }
                }

                .coment-count {
                    color: @defaultCancelText;
                    box-sizing: border-box;
                    padding: 0 40px;
                    font-weight: bold;
                }

                .commentcard-box {
                    .publicMP(0, 0 0 20px 0);
                    .publicFlex(center, none, center);
                    flex-direction: column;
                }

                .no-comment {
                    .publicFlex(center, none, center);
                    .publicWH(100%, 150px);
                    color: @defaultTextHv;
                }
            }

        }

        .author-box {
            margin-left: 20px;
        }
    }
}
</style>