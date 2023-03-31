<template>
    <div>
        <div class="main-container-1">
            <el-affix style="width:100%;height: 58px;" v-Fixed>
                <NavBar></NavBar>
            </el-affix>
            <div class="center-box-container">
                <div class="title-box-container">
                    <div class="title-box">
                        <div class="title">
                            <img :src="store.$state.NavBarData.logoUrl" alt="" srcset="">
                            <h1>Lemon Blog</h1>
                        </div>
                        <TextAmt class="TextAmt"></TextAmt>
                    </div>
                </div>
            </div>
            <div>
                <el-icon class="arrow" color="#fff" size="32">
                    <ArrowDown />
                </el-icon>
            </div>
        </div>
        <div class="main-container-2">
            <div class="card-container">
                <div class="newscard-container">
                    <NewsCard class="newscard"></NewsCard>
                    <el-card class="tips" shadow="always" :body-style="{ padding: '10px' }" style="border-radius: 10px;">
                        <div style="display: flex;align-items: center;">
                            <svg t="1675420277537" class="d-arrow" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="6653" width="200" height="200">
                                <path
                                    d="M792.5 446.6L512 727.1 231.5 446.6c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l301.8 301.7c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8L835 489c11.7-11.7 11.7-30.7 0-42.4-11.8-11.7-30.8-11.7-42.5 0zM490.8 577.4c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8L835 275.7c11.7-11.7 11.7-30.7 0-42.4s-30.7-11.7-42.4 0L512 513.8 231.5 233.3c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l301.7 301.7z"
                                    fill="#333333" p-id="6654"></path>
                            </svg>
                            <span style="margin: 0 5px;">快来发表你的第一篇文章吧!</span>
                            <svg t="1675420277537" class="d-arrow" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="6653" width="200" height="200">
                                <path
                                    d="M792.5 446.6L512 727.1 231.5 446.6c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l301.8 301.7c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8L835 489c11.7-11.7 11.7-30.7 0-42.4-11.8-11.7-30.8-11.7-42.5 0zM490.8 577.4c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8L835 275.7c11.7-11.7 11.7-30.7 0-42.4s-30.7-11.7-42.4 0L512 513.8 231.5 233.3c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l301.7 301.7z"
                                    fill="#333333" p-id="6654"></path>
                            </svg>
                        </div>
                    </el-card>
                    <ArtCard></ArtCard>
                </div>
                <div>
                    <div class="userinfocard-container">
                        <UserInfoCard>
                        </UserInfoCard>
                        <div v-if="signstore.$state.isLogin">
                            <el-card class="edit" shadow="always" :body-style="{ padding: '10px' }"
                                style="border-radius: 10px;" @click="$router.push({ name: 'editarticle' })">
                                <div>
                                    <span>写文章</span>
                                    <el-icon>
                                        <Edit />
                                    </el-icon>
                                </div>
                            </el-card>
                        </div>
                    </div>
                    <div class="notice-container">
                        <Notice></Notice>
                    </div>
                </div>
            </div>
        </div>
        <Copyright></Copyright>
    </div>
</template>

<script setup lang="ts" >
import NavBar from '@/components/NavBar.vue'
import TextAmt from '@/components/Home/TextAmt.vue'
import NewsCard from '@/components/Home/NewsCard.vue'
import UserInfoCard from '@/components/Home/UserInfoCard.vue'
import ArtCard from '@/components/Home/ArtCard.vue'
import Copyright from '@/components/Copyright.vue'
import Notice from '@/components/Notice.vue'
import { useStore } from '@/store/HomeState'
import { useStore as signStore } from '@/store/SignState'
const store = useStore()
const signstore = signStore()
</script>

<style scoped lang="less">
:deep(.el-affix--fixed) {
    z-index: 99;
}

//样式
.main-container-1 {
    .publicFlex(center, none, space-between);
    .publicWH(100%, 100vh);
    flex-direction: column;
    overflow: hidden;
    background: url('@/assets/images/background6.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;

    .center-box-container {
        .publicWH(100%, 85%);
        .publicFlex(center, none, center);
        flex-direction: column;

        .title-box-container {
            .publicFlex(center, none, center);
            flex-direction: column;
            .publicWH(100%, 100%);
            .publicMP(0, auto);

            .title-box {
                .publicFlex(center, none, center);
                flex-direction: column;

                .title {
                    .publicWH(100%, auto);
                    .publicFlex(center, none, center);

                    img {
                        .publicWH(64px, 64px)
                    }

                    h1 {
                        .publicMP(0, 0);
                        color: @defaultFont;
                        font-size: 2.5em;
                    }
                }
            }
        }
    }

    .arrow {
        .arrowAnimation();
        margin-bottom: 50px;
        color: @defaultFont;
    }
}

.main-container-2 {
    .publicFlex(none, none, none);
    box-sizing: border-box;
    .publicWH(100%, auto);
    .publicMP(0, 0 5% 0 5%);
    background-color: rgba(244, 231, 210, .1);
    backdrop-filter: blur(8px);
    min-height: 100vh;

    .card-container {
        position: relative;
        .publicFlex(none, none, center);
        .publicWH(100%, auto);
        .publicMP(70px 20px 20px 20px, none);

        .newscard-container {
            .publicWH(55%, auto);

            .tips {
                .publicFlex(center, none, center);
                .publicMP(0 0 10px 0, 0);
                font-size: 14px;
                font-weight: bold;
                color: @pfontColor;

                .d-arrow {
                    .arrowAnimation();
                    .publicWH(16px, 16px);
                }
            }
        }

        .userinfocard-container {
            .publicWH(300px, auto);
            .publicMP(0 0 0 20px, 0);

            .edit {
                .publicFlex(center, none, center);
                .publicMP(10px 0 0 0, 0);
                user-select: none;

                div {
                    .publicFlex(center, none, center);

                    span {
                        .publicMP(0, 0);
                        font-size: 14px;
                        font-weight: bold;
                        color: @pfontColor;
                        transition: all 0.2s ease;
                    }

                    .el-icon {
                        font-weight: bold;
                        color: @pfontColor;
                        transition: all 0.2s ease;
                    }
                }

                &:hover span {
                    color: @defaultTextHv;
                }

                &:hover .el-icon {
                    color: @defaultTextHv;
                }
            }
        }

        .notice-container {
            .publicMP(20px 0 0 20px, 0);
        }
    }
}

@media screen and (min-width: 1440px) {}

@media only screen and (min-width: 1151px) and(max-width: 1439px) {

    .newscard-container {
        width: 80% !important;
    }

    .card-container {
        margin: 0 !important;
    }
}

@media only screen and(min-width: 770px) and(max-width: 1150px) {
    .userinfocard-container {
        display: none !important;
    }

    .newscard-container {
        width: 80% !important;
    }

    .newscard {
        display: none !important;
    }

    .main-container-2 {
        padding: 0 !important;

        .card-container {
            margin: 0 !important;
        }
    }
}

@media only screen and(max-width: 770px) {
    .userinfocard-container {
        display: none !important;
    }

    .newscard-container {
        width: 100% !important;
        padding: 20px;
    }

    .newscard {
        display: none !important;
    }

    .main-container-2 {
        padding: 0 !important;

        .card-container {
            margin: 0 !important;
        }
    }
}
</style>