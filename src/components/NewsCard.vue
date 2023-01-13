<template>
    <div class="container">
        <div class="arrowboth">
            <el-button type="primary" size="default" @click="btnnext()" :icon="ArrowLeft" circle color="#F7F9FA"
                style="--el-button-border-color:#3c3c3c;--el-button-hover-bg-color:transparent;--el-button-hover-border-color:#3c3c3c"></el-button>
        </div>

        <div class="newscard">
            <el-carousel height="151.6px" direction="horizontal" :initial-index="0" :autoplay="false" :interval="3000"
                :loop="true" trigger="hover" indicator-position="outside" arrow="never" ref="focus">
                <el-carousel-item v-for="mainitem in newslist" :key="mainitem.key">
                    <div>
                        <el-row :gutter="20" type="flex"
                            style="flex-wrap: nowrap;margin: 0;padding: 0;position: relative;left: 0;">
                            <el-col v-for="item in newslist[mainitem.key].list" :key="item.id" :span="6" :offset="0">
                                <el-card shadow="hover" :body-style="{ padding: '20px' }">
                                    <div>
                                        <span>Tilte</span>
                                    </div>
                                    <p>{{ item.text }}</p>
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

const newslist = [
    {
        key: 0,
        list: [
            {
                id: 1,
                text: 1,
            },
            {
                id: 2,
                text: 2,
            },
            {
                id: 3,
                text: 3,
            },
            {
                id: 4,
                text: 4,
            }
        ]
    },
    {
        key: 1,
        list: [
            {
                id: 1,
                text: 5,
            },
            {
                id: 2,
                text: 6,
            },
            {
                id: 3,
                text: 7,
            },
            {
                id: 4,
                text: 8,
            }
        ]
    },
    {
        key: 2,
        list: [
            {
                id: 1,
                text: 6,
            },
            {
                id: 2,
                text: 6,
            },
            {
                id: 3,
                text: 7,
            },
            {
                id: 4,
                text: 8,
            }
        ]
    }
]
let focus = ref()
console.log(focus.value);
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
            .publicWH(150px, 150px);
            border-radius: 20px;
        }
    }

}
</style>