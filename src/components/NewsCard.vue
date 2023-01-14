<template>
    <div class="container">
        <div class="arrowboth">
            <el-button type="primary" size="default" @click="btnnext()" :icon="ArrowLeft" circle color="#F7F9FA"
                style="--el-button-border-color:#3c3c3c;--el-button-hover-bg-color:transparent;--el-button-hover-border-color:#3c3c3c"></el-button>
        </div>

        <div class="newscard">
            <el-carousel height="201.6px" direction="horizontal" :initial-index="0" :autoplay="false" :interval="3000"
                :loop="true" trigger="hover" indicator-position="outside" arrow="never" ref="focus">
                <el-carousel-item v-for="mainitem in store.$state.newslist" :key="mainitem.key">
                    <div>
                        <el-row :gutter="20" type="flex"
                            style="flex-wrap: nowrap;margin: 0;padding: 0;position: relative;left: 0;">
                            <el-col v-for="item in store.$state.newslist[mainitem.key].list" :key="item.id" :span="8"
                                :offset="0">
                                <el-card shadow="hover"
                                    :body-style="{ padding: '0px', display: 'flex', flexDirection: 'column' }">
                                    <el-image :src="item.img" fit="cover" :lazy="false"
                                        style="border-radius: 10px;width:100%;height:130px;margin: 0 auto;"></el-image>
                                    <div class="newscard-content">
                                        <div class="newscard-content-title" style="display:flex">
                                            <h4 :title="item.title">{{ item.title }}</h4>
                                            <span>{{ item.date }}</span>
                                        </div>
                                        <p>{{ item.content }}</p>
                                    </div>

                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-carousel-item>
            </el-carousel>

        </div>

        <div class="arrowboth" style="margin-left: 6px;">
            <el-button type="primary" size="default" @click="btnnext('right')" :icon="ArrowRight" circle color="#F7F9FA"
                style="--el-button-border-color:#3c3c3c;--el-button-hover-bg-color:transparent;--el-button-hover-border-color:#3c3c3c"></el-button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { useStore } from '@/store/NewsState'

const store = useStore()
let focus = ref()

//按钮控制轮播图
function btnnext(val?: string) {
    if (val === 'right') {
        focus.value.next()
    } else {
        focus.value.prev()
    }
}

</script>

<style scoped lang="less">
.container {
    .publicFlex(center, none, none);

    .newscard {
        .publicWH(100%, 100%);
        overflow: hidden;

        .el-card {
            .publicWH(200px,200px);
            border-radius: 20px;

            .newscard-content {

                .newscard-content-title {
                    display: flex;
                    .publicWH(100%, auto);
                    h4 {
                        .publicWH(80%, auto);
                        .publicMP(0 0 0 10px, 10px 0 5px 0);
                        color: @pfontColor;
                        .textEllipsis(auto,nowrap)
                    }

                    span {
                        .publicWH(50%, auto);
                        .publicMP(0 10px 0 0px, 13px 0 0 0);
                        color: @sfontColor;
                        .textEllipsis(12px,nowrap)
                    }
                }



                p {
                    .publicWH(87%, auto);
                    .publicMP(4px 10px, 0);
                    color: @sfontColor;
                    .textEllipsis(12px,nowrap);
                    letter-spacing:1px;
                }
            }
        }
    }

}
</style>