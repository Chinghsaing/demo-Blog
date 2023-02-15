<template>
    <div>
        <el-card shadow="never" :body-style="{ padding: '0', }">
            <div ref="article" v-html="store.$state.ArtData[id - 1].artContent">
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
import { useRoute } from 'vue-router'
import { getTitle } from '@/hooks/hooks'
import { ref } from 'vue'
const store = useStore()
const route = useRoute()
const article = ref()
const id: number = Number(route.params.id)
getTitle(article)
</script>

<style scoped lang="less">
.el-card {
    .publicWH(100%, auto);
    border: none;
    border-radius: 10px;

    p {
        color: @pfontColor;
        font-size: 18px;
    }
}
</style>