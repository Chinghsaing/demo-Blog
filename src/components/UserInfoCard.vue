<template>
    <div class="userinfocard"  
    ref="main1">
        <el-card shadow="always" :body-style="{ padding: '20px' }" style="border-radius: 20px;">
            <div class="main-container">
                <el-avatar icon="el-icon-user-solid" size="large" shape="circle" :src="img" fit="fill"></el-avatar>
                <span class="name">Mishuroki</span>
                <p class="name-tag">Happy everyday</p>
                <div style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-badge :value="10" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        </el-badge>

                        <p class="select-num">10</p>
                    </div>
                    <div class="select">
                        <el-badge :value="3" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        </el-badge>

                        <p class="select-num">5</p>
                    </div>
                    <div class="select">
                        <el-badge :value="5" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">消息</el-button>
                        </el-badge>

                        <p class="select-num">2</p>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
const img = new URL(`@/assets/images/usericon.png`, import.meta.url).href

</script>

<style scoped lang="less">
.el-card {
    background-color: @defaultFont;
    .publicWH(300px, 350px);

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
                transition: all .5s ease;

                &:hover {
                    background-color: @defaultHv;
                }
            }

            .select-num {
                .publicMP(5px 0, 0px);
                font-weight: bold;
            }
        }
    }
}

</style>