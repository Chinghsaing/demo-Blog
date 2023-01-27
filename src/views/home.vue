<template>
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
                <ArtCard></ArtCard>
            </div>
            <div class="userinfocard-container">
                <el-affix :offset="78">
                    <UserInfoCard>
                    </UserInfoCard>
                </el-affix>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import NavBar from '@/components/NavBar.vue'
import TextAmt from '@/components/Home/TextAmt.vue'
import NewsCard from '@/components/Home/NewsCard.vue'
import UserInfoCard from '@/components/Home/UserInfoCard.vue'
import ArtCard from '@/components/Home/ArtCard.vue'

import { useStore } from '@/store/HomeState'



const store = useStore()

</script>

<style scoped lang="less">
//样式
.main-container-1 {
    .publicFlex(center, none, space-between);
    .publicWH(100%, 100vh);
    flex-direction: column;
    overflow: hidden;

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
                    .leftSlideIn(1.5s, ease);

                    img {
                        .publicWH(64px, 64px)
                    }

                    h1 {
                        .publicMP(0, 0);
                        color: @defaultFont;
                        font-size: 2.5em;
                    }
                }

                .TextAmt {
                    .rightSlideIn(1.5s, ease)
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
    background-color: @defaultBG;

    .card-container {
        position: relative;
        .publicFlex(none, none, center);
        .publicWH(100%, auto);
        .publicMP(70px 20px 20px 20px, none);

        .newscard-container {
            .publicWH(55%, auto);
        }

        .userinfocard-container {
            .publicWH(300px, 350px);
            .publicMP(0 0 0 20px, 0);
        }
    }
}

@media screen and (min-width: 1440px) {
    .userinfocard-container {
        display: block !important;
    }
}

@media only screen and (min-width: 850px) and(max-width: 1439px) {
    .userinfocard-container {
        display: none !important;
    }

    .newscard-container {
        width: fit-content !important;
    }

    .card-container {
        margin: 0 !important;
    }
}

@media only screen and(min-width: 770px) and(max-width: 850px) {
    .userinfocard-container {
        display: none !important;
    }

    .newscard-container {
        width: fit-content !important;
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
        width: fit-content !important;
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