<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px' }" style="border-radius: 10px;">
            <div class="main-container">
                <el-avatar icon="el-icon-user-solid" size="large" shape="circle" src="img" fit="fill"></el-avatar>
                <span class="name">Mishuroki</span>
                <p class="name-tag">Happy everyday</p>
                <div class="locate-box">
                    <el-icon size="18">
                        <Location />
                    </el-icon>
                    <p>Guangdong, China</p>
                </div>
                <div style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-button type="primary" size="default" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        <p class="select-num">6</p>
                    </div>
                    <div class="select">
                        <el-button type="primary" size="default" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        <p class="select-num">6</p>
                    </div>
                    <div class="select">
                        <el-button type="primary" size="default" @click=""
                            style="--el-button-hover-bg-color:transparent;" round color="transparent">喜欢</el-button>
                        <p class="select-num">6</p>
                    </div>
                </div>
                <div class="button-box">
                    <el-link :underline="false" href="javascript:;" @click="">
                        <div>
                            <h2>关注</h2>
                        </div>
                    </el-link>
                </div>
                <div class="button-box">
                    <el-link :underline="false" href="javascript:;" @click="">
                        <div>
                            <h2>私信</h2>
                        </div>
                    </el-link>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArtState';
const store = useStore()

const authorInfo = {

}
</script>

<style scoped lang="less">
.el-card {
    .publicWH(300px, 500px);

    .main-container {
        .publicFlex(center, none, none);
        flex-direction: column;

        .el-avatar {
            .publicMP(20px 0 0 0, 0px);
            .publicWH(100px, 100px);
        }

        .name {
            .publicMP(10px 0 0 0, 0px);
            .publicFont(28px, 600, @pfontColor, 0px)
        }

        .name-tag {
            .publicMP(5px, 0px);
            .publicFont(14px, 0, @sfontColor, 1px);
        }

        .select {
            .publicFlex(center, none, none);
            flex-direction: column;
            .publicMP(10px 10px, 0px);

            .el-button {
                color: @pfontColor;
                border: none;
                transition: all .2s ease;

                &:hover {
                    background-color: @defaultHv;
                }

                &:active {
                    background-color: @defaultAct;
                }
            }

            .select-num {
                .publicMP(5px 0, 0px);
                font-weight: bold;
            }
        }

        .locate-box {
            .publicFlex(center, none, none);
            .publicMP(5px, 0px);

            p {
                .publicMP(0px, 0px);
                .publicFont(14px, 0, @sfontColor, 1px);
            }
        }

        .button-box {
            margin-top: 20px;
            .publicFlex(none, none, center);
            .publicWH(100%, 100%);
            background-color: @defaultTitle;
            border-radius: 20px;
            box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

            &:hover {
                background-color: rgb(241, 129, 219);
            }

            h2 {
                margin: 5px 0;
                color: @defaultFont2;
                font-size: 18px;
                font-weight: 800;
            }
        }
    }
}
</style>