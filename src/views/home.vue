<template>
    <div class="main-container-1">
        <NavBar></NavBar>
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
                <NewsCard></NewsCard>
                <ArtCard></ArtCard>
            </div>
            <div class="userinfocard-container">
                <UserInfoCard class="UserInfoCard" :style="fixed == true ? 'position: fixed;top: 0;' : ''">
                </UserInfoCard>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts" >
import NavBar from '@/components/NavBar.vue'
import TextAmt from '@/components/TextAmt.vue'
import NewsCard from '@/components/NewsCard.vue'
import UserInfoCard from '@/components/UserInfoCard.vue'
import ArtCard from '@/components/ArtCard.vue'

import { ref, onMounted } from 'vue'

import { useStore } from '@/store/HomeState'

import UseScroll from '@/hooks/UseScroll'
import UseEmerge from '@/hooks/UseEmerge'

const store = useStore()
const fixed = UseScroll()
</script>

<style scoped lang="less">
//样式
.main-container-1 {
    .publicFlex(center, none, center);
    .publicWH(100%, 100%);
    flex-direction: column;
    background: url('@/assets/images/background.jpg') no-repeat center;
    background-size: 100% 100%;
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
    }
}

.main-container-2 {
    .publicFlex(none, none, none);
    box-sizing: border-box;
    .publicWH(100%, 100%);
    .publicMP(0, 0 5% 0 5%);

    .card-container {
        position: relative;
        .publicFlex(none, none, center);
        .publicWH(100%, auto);
        .publicMP(20px, none);

        .newscard-container {
            .publicWH(55%, 201.6px);
        }

        .userinfocard-container {
            .publicWH(300px, 350px);
            .publicMP(0 0 0 20px, 0);
        }
    }
}
</style>