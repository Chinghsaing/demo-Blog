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
                    <TextAmt></TextAmt>
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
    </div>
</template>

<script setup lang="ts" >
import NavBar from '@/components/NavBar.vue'
import TextAmt from '@/components/TextAmt.vue'
import { useStore } from "@/store/HomeState"

const store = useStore()
</script>

<style scoped lang="less">
//样式
.main-container-1 {
    .publicFlex(center, none, center);
    .publicWH(100%, 100%);
    flex-direction: column;
    background: url('@/assets/images/background.jpg') no-repeat center;
    background-size: 100% 100%;

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
                    .publicFlex(center, none, center);

                    img {
                        .publicWH(64px, 64px)
                    }

                    h1 {
                        .publicMP(0, 0);
                        color: @defult;
                        font-size: 2.5em;
                    }
                }
            }
        }
    }

    .arrow {
        animation-name: arrowAnimation;
        animation-duration: 1s;
        animation-direction: alternate-reverse;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
}

.main-container-2 {
}

//创建帧动画
@keyframes arrowAnimation {
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.1);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1.3);
    }

    80% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(1.5);
    }
}
</style>