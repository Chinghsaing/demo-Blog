<template>
    <div class="home-container">
        <el-container direction="vertical">
            <NavBar></NavBar>
            <el-main>
                <div class="mid-box-container">
                    <div class="mid-box">
                        <div class="title-box">
                            <img :src="store.$state.NavBarData.logoUrl" alt="" srcset="">
                            <h1>Lemon Blog</h1>
                        </div>
                        <TextAmt></TextAmt>
                    </div>
                </div>
            </el-main>
        </el-container>
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
.home-container {
    .publicWH(100%, 100%);
    background: url('@/assets/images/background.jpg') no-repeat center;
    background-position: center;
    background-size: 100% 100%;

    .el-container {
        .publicWH(100%, 100%);

        .el-main {
            .publicWH(100%, 100%);
            .publicFlex(center, none, center);
            flex-direction: column;
            .mid-box-container {
                // .publicFlex(center, none, center);
                // flex-direction: column;
                .publicWH(100%, 45%);
                .publicMP(0, auto);

                .mid-box {
                    .publicFlex(center, none, center);
                    flex-direction: column;

                    .title-box {
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
    }
}
</style>